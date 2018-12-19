// Import express npm
var express = require("express");
// Create router
var router = express.Router();

// Import from burger.js
var burger = require("../models/burger.js");

// Route to load home page and show all burgers
router.get("/", function(req, res) {
    // Calls burger.selectAll function
    burger.selectAll(function(data) {
        // Saves all burger data in a database
        var burgerObj = {
            burgers: data
        };
        // Renders page using index.handlebars and sending the burgerObj retrieved from the database
        res.render("index", burgerObj);
    });
});

// Route for the post when user submits a new burger
router.post("/api", function(req, res) {
    burger.insertOne(req.body.burger, function(result) {
        // Sends back burger name
        res.json({ burger: result.burger_name})
    })
});

// Route for the put to update burger devoured to true
router.put("/api", function(req, res) {
    burger.updateOne(req.body.devourID, function(result) {
        // Sends back burger devoured state
        res.json({ burger: result.devoured})
    })
})

// Export routes for use in server.js
module.exports = router;