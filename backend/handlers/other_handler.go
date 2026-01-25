package handlers

import (
	"encoding/json"
	"net/http"
)

func CreateOrder(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	response := map[string]string{
		"message": "Order received successfully",
		//prima HTTP request
		//vraća JSON response
	}

	json.NewEncoder(w).Encode(response)
}
