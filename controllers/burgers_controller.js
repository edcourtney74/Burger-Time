// Import express npm
var express = require("express");
// Create router
var router = express.Router();

// Import from burger.js
var burger = require("../models/burger.js");

// Route for the home page
router.get("/", function(req, res) {
    // Calls burger.selectAll function
    burger.selectAll(function(data) {
        // Saves all burger data in a database
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        // Renders page using index.handlebars and sending the burgerObj retrieved from the database
        res.render("index", burgerObj);
    });
});

// Route for the post when user submits a new burger
router.post("/", function(req, res) {
    burger.insertOne(req.body.burger, function(result) {
        // Send back burger name
        res.json({ burger: result.name})
    })
});

// Route for the put to update burger devoured to true
router.put("/", function(req, res) {
    burger.updateOne(req.body.devourID, function(result) {
        console.log("Put method: " + req.body.devourID)
        // Send back burger devoured state
        res.json({ burger: result.devoured})
    })
})



// Export routes for use in server.js
module.exports = router;