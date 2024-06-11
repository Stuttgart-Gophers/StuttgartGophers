package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

func main() {

	engine := html.New("./templates", ".gohtml")

	app := fiber.New(fiber.Config{
		Views: engine,
	})
	app.Get("/", func(c *fiber.Ctx) error {
		// Render the templates
		return c.Render("home", fiber.Map{
			"Title": "Hello, World!",
		})
	})
	app.Static("/static", "./templates/static")

	log.Fatal(app.Listen(":3000"))
}
