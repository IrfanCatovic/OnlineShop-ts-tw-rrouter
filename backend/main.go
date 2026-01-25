package main

import (
	"backend/db"
	"backend/router"
	"log"
	"net/http"
)

func main() {
	db.Connect("mongodb+srv://catovicc84_db_user:kwLVPb7cPp530s5B@onlineshop.irsj1r6.mongodb.net/")
	r := router.SetupRouter() //pravi sve rute

	log.Println("Server running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", r)) //pali server - port :8080
}

// main.go → pali server
// router → govori koju rutu gde
// handlers → šta se stvarno dešava
