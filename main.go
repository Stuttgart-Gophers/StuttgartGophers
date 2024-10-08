package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

//go:generate npm run build:css

func main() {

	engine := html.New("./templates", ".gohtml")

	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Get("/", func(c *fiber.Ctx) error {
		// Render the templates
		return c.Render("home", fiber.Map{
			"Title": "Stuttgart Gophers",
		}, "layouts/main")
	})

	app.Get("/upcoming", func(c *fiber.Ctx) error {
		// Render the upcoming events page
		return c.Render("upcoming", fiber.Map{
			"Title": "Upcoming Events",
		}, "layouts/main")
	})

	app.Get("/past", func(c *fiber.Ctx) error {
		// Render the past events page
		return c.Render("past", fiber.Map{
			"Title": "Past Events",
		}, "layouts/main")
	})

	app.Get("/contact", func(c *fiber.Ctx) error {
		// Render the contact us page
		return c.Render("contact", fiber.Map{
			"Title": "Contact Us",
		}, "layouts/main")
	})

	app.Get("/sponsors", func(c *fiber.Ctx) error {
		// Render the sponsors page
		return c.Render("sponsors", fiber.Map{
			"Title": "Our Sponsors",
		}, "layouts/main")
	})

	// app.Get("/signup", func(c *fiber.Ctx) error {
	// 	// Render the signup page
	// 	return c.Render("signup", fiber.Map{
	// 		"Title": "Sign Up",
	// 	})
	// })

	app.Static("/static", "./templates/static")

	// Catch-all route
	app.Get("*", func(c *fiber.Ctx) error {
		return c.Redirect("/")
	})

	log.Fatal(app.Listen(":5000"))
}
