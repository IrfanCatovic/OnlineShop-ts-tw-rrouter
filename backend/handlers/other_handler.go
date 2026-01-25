package handlers

import (
	"encoding/json"
	"log"
	"net/http"
)

type OrderItem struct {
	ID         string  `json:"id"`         // ID proizvoda
	Title      string  `json:"title"`      // naziv proizvoda
	Price      float64 `json:"price"`      // cena po komadu
	Quantity   int     `json:"quantity"`   // koliko komada
	TotalPrice float64 `json:"totalPrice"` // ukupna cena (quantity * price)
}

type Order struct {
	Username   string      `json:"username"`   // korisničko ime
	Items      []OrderItem `json:"items"`      // lista proizvoda u cartu
	TotalPrice float64     `json:"totalPrice"` // ukupna cena cele porudžbine
}

func CreateOrder(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var order Order

	err := json.NewDecoder(r.Body).Decode(&order)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	log.Println("Received order:", order)

	json.NewEncoder(w).Encode(map[string]string{
		"message": "Order received",
	})
	//prima HTTP request
	//vraća JSON response
}
