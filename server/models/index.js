var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      getMessages(callback);
    }, // a function which produces all the messages
    post: function (message, callback) {
      insertRoom(message.roomname, function(){
        insertMessage(message, callback);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (message, callback) {
      insertUser(message.username, callback);
    }
  }
};
//////////////////////////////POST METHODS /////////////////////////////////////
function insertRoom(room, callback) {

  db.connect.query(`INSERT IGNORE INTO rooms SET name ="${room}";`, function (error, results, fields) {
    if (error) throw error;
    callback();
    // connected!
  });
}

function insertUser(user, callback) {
  db.connect.query(`INSERT IGNORE INTO users SET name = "${user}";`, function (error, results, fields) {
    if (error) throw error;
    // connected!
    callback();
  });
}

function insertMessage(message, callback) {
  db.connect.query(`INSERT INTO messages SET message = "${message.message}", user_Id = (select id from users where name="${message.username}"), room_Id=(select id from rooms where name="${message.roomname}");`, function (error, results, fields) {
  if (error) throw error;
  console.log('I AM connected?')
    // connected!
    callback();
  });
}

////////////////////////////////GET METHODS ///////////////////////////////////////
function getMessages (callback) {
  db.connect.query('SELECT * FROM messages', function(error, results, fields) {
    results.forEach(result => {
      var text = result.message;
      db.connect.query(`SELECT name FROM rooms WHERE id="${result.room_Id}"`, function(error, results, fields) {
        var room = results[0].name;
        var messages = [];
        if(error) throw error;
        var message = {message: text, roomname: room};
        messages.push(message);
        callback(JSON.stringify(messages));
      });
    });
  });
}