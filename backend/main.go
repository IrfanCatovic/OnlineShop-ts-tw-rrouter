package main

import (
	"backend/db"
	"backend/router"
	"log"
	"net/http"
	"os"

	"github.com/rs/cors" // dodaj ovaj import
)

func main() {
	// 1️⃣ Poveži se na MongoDB
	db.Connect("mongodb+srv://catovicc84_db_user:kwLVPb7cPp530s5B@onlineshop.irsj1r6.mongodb.net/")

	// 2️⃣ Setup router
	r := router.SetupRouter() // tvoje rute

	// 3️⃣ Konfiguriši CORS
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // frontend origin
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
	})

	// 4️⃣ Wrap router sa CORS handlerom
	handler := c.Handler(r)

	// 5️⃣ Startuj server
	log.Println("Server running on http://localhost:8080")
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Println("Listening on port", port)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}

// main.go → pali server
// router → govori koju rutu gde
// handlers → šta se stvarno dešava
