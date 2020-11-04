CREATE DATABASE 'managerceumadb';

CREATE TABLE courses(
    cod SERIAL PRIMARY KEY,
    coursename VARCHAR(100),
    ch VARCHAR(10),
    typecourse VARCHAR(100),
    created_at DATE
);

CREATE TABLE students(
    cod SERIAL PRIMARY KEY,
    name  VARCHAR(100),
    cpf VARCHAR(100),  
    email VARCHAR(100),
    fone VARCHAR(100), 
    cep VARCHAR(100),
    address VARCHAR(100),
    addressnumber VARCHAR(100),
    neighborhood VARCHAR(100),
    uf VARCHAR(100),
    state VARCHAR(100),
    city VARCHAR(100),
    course_cod INT,
    created_at DATE,  
    FOREIGN KEY (course_cod) REFERENCES courses (cod)
);
