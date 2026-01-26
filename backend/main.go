package main

import (
	"log"
	"net/http"
	"os"

	"backend/db"
	"backend/router"

	"github.com/rs/cors"
)

func main() {
	// ✅ 1. Učitaj Mongo URI iz ENV (OBAVEZNO za Render)
	mongoURI := os.Getenv("MONGODB_URI")
	if mongoURI == "" {
		log.Fatal("MONGODB_URI is not set")
	}

	db.Connect(mongoURI)

	// ✅ 2. Setup router
	r := router.SetupRouter()

	// ✅ 3. CORS (dozvoli svima za sad)
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"*"},
	})

	handler := c.Handler(r)

	// ✅ 4. Render koristi PORT env
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Println("Server running on port", port)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}
