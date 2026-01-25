package handlers

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"backend/db" // ovo je tvoj mongo client

	"go.mongodb.org/mongo-driver/bson"
)

// Strukture ostaju iste
type OrderItem struct {
	ID          int     `json:"id"`
	Title       string  `json:"title"`
	Price       float64 `json:"price"`
	Quantity    int     `json:"quantity"`
	TotalPrice  float64 `json:"totalPrice"`
	Description string  `json:"description,omitempty"`
	Image       string  `json:"image,omitempty"`
}

type Order struct {
	Username   string      `json:"username"`
	Items      []OrderItem `json:"items"`
	TotalPrice float64     `json:"totalPrice"`
	CreatedAt  string      `json:"createdAt"` // timestamp
}

func CreateOrder(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var order Order

	// dekodovanje JSON-a
	err := json.NewDecoder(r.Body).Decode(&order)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Invalid request body",
		})
		return
	}

	// dodaj timestamp
	order.CreatedAt = time.Now().Format(time.RFC3339)

	// upis u MongoDB
	collection := db.Client.Database("myshop").Collection("orders")
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err = collection.InsertOne(ctx, order)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Failed to save order",
		})
		log.Println("Mongo insert error:", err)
		return
	}

	// potvrda za frontend
	json.NewEncoder(w).Encode(map[string]string{
		"message": "Order received successfully",
	})
}

func GetOrders(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	collection := db.Client.Database("myshop").Collection("orders")
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := collection.Find(ctx, bson.M{}) // prazni filter = sve dokumente
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Failed to fetch orders",
		})
		return
	}
	defer cursor.Close(ctx)

	var orders []Order
	if err = cursor.All(ctx, &orders); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Failed to parse orders",
		})
		return
	}

	json.NewEncoder(w).Encode(orders)
}
