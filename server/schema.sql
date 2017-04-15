CREATE DATABASE chat;

USE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  /* Describe your table here.*/
  id INT NULL AUTO_INCREMENT,
  name TEXT(15),
  PRIMARY KEY(id)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  name TEXT(15),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  Id INT NOT NULL AUTO_INCREMENT,
  message TEXT(140),
  user_Id INT NOT NULL,
  room_Id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_Id)
    REFERENCES users (id),
  FOREIGN KEY (room_Id)
    REFERENCES rooms (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

