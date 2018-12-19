// Import from orm.js
var orm = require("../config/orm.js");

// Calls ORM functions based on inputs
var burger = {
    selectAll: function(onCallback) {
        orm.selectAll("burgers", function(res) {
            onCallback(res);
        });
    },
    insertOne: function(name, onCallback) {
        orm.insertOne(name, function(res) {
            onCallback(res);
        });
    },
    updatOne: function(id) {
        orm.updateOne(id)
    }
}

// Export for use in burgers_controllers.js
module.exports = burger;