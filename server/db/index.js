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

var tablename = "messages"; // TODO: fill this out

/* Empty the db table before each test so that multiple tests
 * (or repeated runs of the tests) won't screw each other up: */
// dbConnection.query('truncate ' + tablename, done);

exports.addMessage = function(user, text, room) {
  // console.log('IN ADD MESSA +++++++++++++', user, text, room);
  dbConnection.query(`INSERT INTO rooms (name) VALUE ('${room}');`, function (error, results, fields) {
    console.log('rooms RESULTS ++++++++++++++++++++++>>>>>>>>', results);
    if (error) throw error;
    // connected!
  });
  dbConnection.query(`INSERT INTO users (name) VALUE ('${user}');`, function (error, results, fields) {
    if (error) throw error;
    // connected!
  });
  // connection.query(`INSERT INTO messages (message, user_Id, room_Id) VALUE (${user}, ${text}, ${room})`, function (error, results, fields) {
  //   if (error) throw error;
  //   // connected!
  // });

};
