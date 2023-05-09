CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS Categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL
);
CREATE TABLE IF NOT EXISTS Questions (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES Categories(id),
    question_content TEXT NOT NULL UNIQUE
);
CREATE TABLE IF NOT EXISTS Responses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id),
    question_id INTEGER REFERENCES Questions(id),
    response_content TEXT NOT NULL
);
