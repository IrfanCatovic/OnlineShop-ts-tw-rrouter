package main

import (
	"backend/db"
	"backend/router"
	"log"
	"net/http"
	"os"

	"github.com/rs/cors"
)

func main() {

	db.Connect("mongodb+srv://catovicc84_db_user:kwLVPb7cPp530s5B@onlineshop.irsj1r6.mongodb.net/?retryWrites=true&w=majority")

	r := router.SetupRouter()

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"},
		AllowedHeaders:   []string{"Content-Type", "Authorization", "Accept", "*"},
		AllowCredentials: false,
		ExposedHeaders:   []string{"Content-Length"},
		MaxAge:           600,
	})

	handler := c.Handler(r)

	//Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server running on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}

// main.go → turn on server
// router → explain routes
// handlers → what really backend does
