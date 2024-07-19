package main

import (
	"fmt"
	"net/http"
)

func handleRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "hello from server!")
}

func setupRoutes() {
	http.HandleFunc("/", handleRoot)
}

func main() {
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
