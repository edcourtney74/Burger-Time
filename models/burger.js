// Import from orm.js
var orm = require("../config/orm.js");

// Calls ORM functions based on inputs
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(name) {
        orm.insertOne(name);
    },
    updatOne: function(id) {
        orm.updateOne(id)
    }
}

// Export for use in burgers_controllers.js
module.exports = burger;