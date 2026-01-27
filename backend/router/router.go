package router

import (
	"backend/handlers"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupRouter() *mux.Router {
	r := mux.NewRouter()

	r.HandleFunc("/orders", handlers.CreateOrder).Methods("POST") // When we finish shoping, sends to backend
	r.HandleFunc("/orders", handlers.GetOrders).Methods("GET")    // get all previous carts
	r.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("pong"))
	}).Methods("GET")

	return r
}
