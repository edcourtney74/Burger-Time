// Bring in MySQL
var mysql = require("mysql");

// Connect to database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "postgres://qzxxpkelypitno:ad2333f961a5ca016b7bb9e960350e564fb0c31235aa2a17c6b3f998cd2aa58b@ec2-54-235-247-209.compute-1.amazonaws.com:5432/d20a5v6sl6k539"
});

// Export connection
module.exports = connection;