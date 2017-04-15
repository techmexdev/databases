CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(15),
  PRIMARY KEY(id),
  UNIQUE(name)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(15),
  PRIMARY KEY(id),
  UNIQUE(name)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  Id INT NOT NULL AUTO_INCREMENT,
  message varchar(340),
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

