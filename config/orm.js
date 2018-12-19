// Import connection.js
var connection = require("./connection");

// Connect to database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
      console.log("connected as id " + connection.threadId);
  });

// Creating ORM variable to hold MySQL sort functions
var orm = {
    // Function to show all burgers in the database
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM ??", [table], function (err, result) {
            if (err) {
                throw err;  
            }
            cb(result);
        });
    },
    // Function to insert a new burger into the database;
    insertOne: function(name) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
            if (err) {
                throw err;
            }               
        })
    },    
    // Function to update burger's devoured value to true
    updateOne: function(id) {
        connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.params.id], function (err, result) {
            if (err) {
                throw err;
                // Check to see if a row was changed; if not, throw an error
            } else if (result.changedRows === 0) {
                return err;
            }        
        })
    }
}
 
// * Export the ORM object
module.exports = orm;
