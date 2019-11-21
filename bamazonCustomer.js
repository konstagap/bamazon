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
  userOptions();
});
inquirer
.prompt([
  //    * The first should ask them the ID of the product they would like to buy.
  {
    type: "input",
    name: "userProductId",
    message: "Enter ID fo product you would like to buy",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  },
])
