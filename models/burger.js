// Import from orm.js
var orm = require("../config/orm.js");

// Calls ORM functions based on inputs
var burger = {
    selectAll: function() {
        orm.selectAll();
    },
    insertOne: function(name) {
        orm.insertOne(name);
    },
    updatOne: function(id) {
        orm.updateOne(id)
    }
}

module.exports = burger;