package main

import (
	"log"
	"net/http"

	"backend/router"
)

func main() {
	r := router.SetupRouter() //pravi sve rute

	log.Println("Server running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", r)) //pali server - port :8080
}

// main.go → pali server
// router → govori koju rutu gde
// handlers → šta se stvarno dešava
