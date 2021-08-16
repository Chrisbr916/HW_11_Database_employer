const express = require('express');

const mysql = require('mysql2');

const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;




app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "department_db"
    },
    console.log("connected tot the department_db database.")
);