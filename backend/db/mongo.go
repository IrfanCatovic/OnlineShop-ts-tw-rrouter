package db

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

func Connect(uri string) {
	log.Println("POKUŠAVAM KONEKCIJU NA MONGODB...")
	log.Println("URI (prvi deo):", uri[:50]+"...")

	//I add timestamp and option
	clientOptions := options.Client().
		ApplyURI(uri).
		SetConnectTimeout(10 * time.Second).
		SetServerSelectionTimeout(10 * time.Second)

	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Printf("MongoDB KONEKCIJA NEUSPEŠNA (connect error): %v", err)
		log.Fatal("MongoDB connect failed → server se gasi")
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Printf("MongoDB PING NEUSPEŠAN: %v", err)
		log.Fatal("MongoDB ping failed → konekcija nije validna")
	}

	Client = client

	log.Println("MongoDB KONEKCIJA USPENA!")
	log.Printf("Povezan na cluster, ping OK (timeout bio %v)", 15*time.Second)
}
