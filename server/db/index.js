var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
dbConnection.connect();
exports.connect = dbConnection;

var tablename = "messages"; // TODO: fill this out
// dbConnection.query('drop database chat;');

/* Empty the db table before each test so that multiple tests
 * (or repeated runs of the tests) won't screw each other up: */
