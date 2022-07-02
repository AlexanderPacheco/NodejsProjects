
CREATE DATABASE commerce;

USE commerce;

DROP TABLE users;

CREATE TABLE IF NOT EXISTS users(
    id INT unsigned NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY `users_email_unique`(email)
);

CREATE TABLE IF NOT EXISTS test(
    temperatura VARCHAR(50) NOT NULL,
    viento VARCHAR(50) NOT NULL,
    humedad VARCHAR(50) NOT NULL
);

DESCRIBE users;

SELECT * FROM test;

INSERT INTO users (username, email, password)
VALUES('Luis','luis@gmail.com','louis');

show databases;