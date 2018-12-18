-- Empty database if it already exists
DROP DATABASE IF EXISTS burgers_db;

-- CREATE & USE DATABASE
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create a table called burgers with necessary columns
CREATE TABLE burgers (
    id INT(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(80) NULL,
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);
