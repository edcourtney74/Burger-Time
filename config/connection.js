// Bring in MySQL
var mysql = require("mysql");

// Connect to database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

// Export connection
module.exports = connection;