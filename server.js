

const mysql = require('mysql2');

const inquirer = require('inquirer');

const cTable = require("console.table");



const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Sylvainlove!22",
        database: "employer_db"
    },
    console.log("connected to the employer_db database.")
);

function veiwDepartments() {
    db.query("Select * FROM department", 
    function(err, res) {
        if(err) throw err;

        console.table(res);

        
    })
}
veiwDepartments();

// this adds a new function when asked 
function addDepartment() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "add_new_dep",
                message: "What is the new department name?",
            },

        ]
    )
    .then(answers => {
       // console.log(answers)
       let query = db.query(
        "INSERT INTO department SET ?",
        {
          department_name: answers.add_new_dep
        },
        function(err, res) {
          if (err) throw err;
        }
      );
    
      console.log(query.sql);
    })
}


//addDepartment();