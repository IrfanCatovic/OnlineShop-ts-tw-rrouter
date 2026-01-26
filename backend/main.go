package main

import (
	"backend/db"
	"backend/router"
	"log"
	"net/http"
	"os"

	"github.com/rs/cors"
)

// dodali smo na whitelist u mongoDB 0.0.0.0/0 to znaci acces odakle hoces
func main() {
	// 1️⃣ Poveži se na MongoDB
	db.Connect("mongodb+srv://catovicc84_db_user:kwLVPb7cPp530s5B@onlineshop.irsj1r6.mongodb.net/?retryWrites=true&w=majority")

	// 2️⃣ Setup router
	r := router.SetupRouter() // tvoje rute

	// 3️⃣ Konfiguriši CORS
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"},
		AllowedHeaders:   []string{"Content-Type", "Authorization", "Accept", "*"},
		AllowCredentials: false, // ako koristiš cookies ili auth sa credentials
		ExposedHeaders:   []string{"Content-Length"},
		MaxAge:           600, // kešira preflight 10 min
	})

	// 4️⃣ Wrap router sa CORS handlerom
	handler := c.Handler(r)

	// 5️⃣ Startuj server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server running on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}

// main.go → pali server
// router → govori koju rutu gde
// handlers → šta se stvarno dešava
