var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message) {
      insertRoom(message.roomname, function(){
        insertMessage(message);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (message) {
      insertUser(message.username);
    }
  }
};

function insertRoom(room, callback) {
  db.query(`INSERT IGNORE INTO rooms SET name ="${room}";`, function (error, results, fields) {
    if (error) throw error;
    callback();
    // connected!
  });
}

function insertUser(user) {
  db.query(`INSERT IGNORE INTO users SET name = "${user}";`, function (error, results, fields) {
    if (error) throw error;
    // connected!
  });
}

function insertMessage(message) {
  db.query(`INSERT INTO messages SET message = "${message.message}", user_Id = (select id from users where name="${message.username}"), room_Id=(select id from rooms where name="${message.roomname}");`, function (error, results, fields) {
    console.log('Text: ', message.message);
    if (error) throw error;
    // connected!
  });
}