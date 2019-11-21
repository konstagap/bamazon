var inquirer = require("inquirer");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_db"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  optionsList();
});
function optionsList() {
  inquirer
    .prompt({
      name: "supervisorOptions",
      type: "rawlist",
      message: "Choose between options",
      choices: [
        "View Product Sales by Department",
        "Create New Department",
        "Exit"
      ]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.supervisorOptions === "View Product Sales by Department") {
        salesByDepartment();
      } else if (answer.supervisorOptions === "Create New Department") {
        optionsList();
      } else {
        connection.end();
      }
    });
}
