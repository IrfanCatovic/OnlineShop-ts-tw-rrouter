package router

import (
	"backend/handlers"

	"github.com/gorilla/mux"
)

func SetupRouter() *mux.Router {
	r := mux.NewRouter()

	r.HandleFunc("/orders", handlers.CreateOrder).Methods("POST") // When we finish shoping, sends to backend
	r.HandleFunc("/orders", handlers.GetOrders).Methods("GET")    // get all previous carts

	return r
}
