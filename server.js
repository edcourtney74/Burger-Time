// Bring in express
var express = require("express");
var app = express();

// Bring in, set up handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set the port
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static folder for assets
app.use(express.static("public/assets"));

// Start the server
app.listen(PORT, function() {
    // Log server has started
    console.log("Server listening on: http://localhost:" + PORT);
});