package router

import (
	"backend/handlers"

	"github.com/gorilla/mux"
)

func SetupRouter() *mux.Router {
	r := mux.NewRouter()

	r.HandleFunc("/orders", handlers.CreateOrder).Methods("POST") // Kada dođe POST /orders → pozovi CreateOrder koji se nalazi u other_handler
	r.HandleFunc("/orders", handlers.GetOrders).Methods("GET")    // citam sve iz db

	return r
}
