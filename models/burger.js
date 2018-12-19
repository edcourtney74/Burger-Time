// Import from orm.js
var orm = require("../config/orm.js");

// Calls ORM functions based on inputs
var burger = {
    // Call function to show all results, with callback function
    selectAll: function(onCallback) {
        orm.selectAll("burgers", function(res) {
            onCallback(res);
        });
    },
    // Call function to insert a new burger into the database, with callback function
    insertOne: function(name, onCallback) {
        orm.insertOne(name, function(res) {
            onCallback(res);
        });
    },
    // Call function to change devoured status to true, with callback function
    updateOne: function(id, onCallback) {
        orm.updateOne(id, function(res) {
            onCallback(res);
        });
    }
}

// Export for use in burgers_controllers.js
module.exports = burger;