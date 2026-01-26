package router

import (
	"backend/handlers"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupRouter() *mux.Router {
	r := mux.NewRouter()

	r.HandleFunc("/orders", handlers.CreateOrder).Methods("POST") // Kada dođe POST /orders → pozovi CreateOrder koji se nalazi u other_handler
	r.HandleFunc("/orders", handlers.GetOrders).Methods("GET")    // citam sve iz db
	r.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("pong"))
	}).Methods("GET")

	return r
}
