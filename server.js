

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


function Questions(){
    inquirer.prompt(
        [
            {
                type: "list",
                name:"Questions",
                message: "what would you like to do?"
                choices: [""]
            }
        ]

    )
    .then(answers=> {
        let choice = answer.Question;

        if (choice === "VeiwEmployee"){
            //call a function 
        }
    })
}


function veiwDepartments() {
    db.query("Select * FROM department", 
    function(err, res) {
        if(err) throw err;

        console.table(res);

        
    })
}
//veiwDepartments();

function veiwRole() {
    db.query("Select * FROM role_table",
    function(err, res){
        if(err) throw err;

        console.table(res);
    })
}
//veiwRole();

function VeiwEmployee() {
    db.query("select * FROM employee",
    function(err, res){
        if(err) throw err;

        console.table(res);
    })
}
//VeiwEmployee();
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
          title: answers.add_new_dep
        },
        function(err, res) {
          if (err) throw err;
        }
      );
    
      console.log(query.sql);
    })
};



//addDepartment();

function addRole() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "add_new_role",
                message: "what is the new role?",
            },
            {
                type: "input",
                name: "add_new_salary",
                message: "what is the Salary?",
            },
            {
                type: "input",
                name: "add_new_dep",
                message: "what is the department?",
            },
        ]
    )
    .then(answers=> {
        let query = db.query(
            "INSERT INTO role_table SET ?",
            {
                role_name: answers.add_new_role
            },
            {
                salary: answers.add_new_salary
            },
            {
                department: answers.add_new_dep
            },
            function(err, res){
                if (err) throw err; 

            }

        );
        console.log(query.sql);
    })
};

function addEmployee() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "add_new_FirstName",
                message: "what is the employees first name?",
            },
            {
                type: "input",
                name: "add_new_LastName",
                message: "what is the employees Last name?",
            },
            {
                type: "input",
                name: "add_new_role",
                message: "what is the employees role?",
            },
            {
                type: "input",
                name: "add_new_manager",
                message: "what is the employees manager ID?",
            },
            
        ]
    )
    .then(answers=> {
        let query = db.query(
            "INSERT INTO employee SET ?",
            {
                first_name: answers.add_new_FirstName
            },
            {
                last_name: answers.add_new_LastName
            },
            {
                role_name: answers.add_new_role
            },
            {
                manager_id: answers.add_new_managerID
            },
            function(err, res){
                if (err)  throw err;

            }
        );
        console.log(query.sql);
    })
}



function updateEmployee() {
    //VeiwEmployee();
    inquirer.prompt(
        [
            {
                type: "input",
                name: "lastName",
                message: "what is the last name of the employee?"   
            },
            {
                type: "input",
                name: "roleID",
                message: "what is the new employee ID?", 
            },
        ]
    )
    .then(answers=> {

   

    let quesry = db.query(


    "UPDATE employee SET ? WHERE ?",
        [
            {
                role_id: answers.roleID
            },

            {
                last_name: answers.lastName
            }
        ]
    ) 
})
}
updateEmployee();