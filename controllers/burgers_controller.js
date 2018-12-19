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
        // Renders page using index.handlebars and sening the burgerObj retrieved from the database
        res.render("index", burgerObj);
    });
});




// Export routes for use in server.js
module.exports = router;