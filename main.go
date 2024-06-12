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
			"Title": "Stuttgart Gophers",
		})
	})

	app.Get("/upcoming", func(c *fiber.Ctx) error {
		// Render the upcoming events page
		return c.Render("upcoming", fiber.Map{
			"Title": "Upcoming Events",
		})
	})

	app.Static("/static", "./templates/static")

	log.Fatal(app.Listen(":3000"))
}
