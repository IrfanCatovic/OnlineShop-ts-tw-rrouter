package handlers

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"backend/db" // ovo je tvoj mongo client
)

// Strukture ostaju iste
type OrderItem struct {
	ID         string  `json:"id"`
	Title      string  `json:"title"`
	Price      float64 `json:"price"`
	Quantity   int     `json:"quantity"`
	TotalPrice float64 `json:"totalPrice"`
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
		http.Error(w, "Invalid request body", http.StatusBadRequest)
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
		http.Error(w, "Failed to save order", http.StatusInternalServerError)
		log.Println("Mongo insert error:", err)
		return
	}

	// potvrda za frontend
	json.NewEncoder(w).Encode(map[string]string{
		"message": "Order received successfully",
	})
}
