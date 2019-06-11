DROP DATABASE IF EXISTS dinner_db;
CREATE DATABASE dinner_db;

USE dinner_db;

-- Create the table plans.
CREATE TABLE dinner
(
    id int NOT NULL AUTO_INCREMENT,
    username varchar (255) NOT NULL,
    userPassword varchar (255) NOT NULL, 
    primaryIngredient TEXT, 
    ingredientInputs TEXT, 
    starredRecipes BOOLEAN, 
    PRIMARY KEY (id)
);

INSERT INTO dinner (username) VALUES ('hilarytest');