// Set Up MySQL Connection
var mysql = require("mysql");
var connection;

// Connect to JawDB or Localhost
console.log("what is env", process.env.JAWSDB_URL);
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log("DO we hit this path on heroku?");
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "G3T0UT@ONCE",
    database: "burgers_db"
  });
  console.log("Did we get a connection?", connection)
}
// Make Connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export Connection For The ORM
module.exports = connection;