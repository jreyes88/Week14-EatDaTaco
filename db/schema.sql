### Schema

CREATE DATABASE eatTacos_db;
USE eatTacos_db;

CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);