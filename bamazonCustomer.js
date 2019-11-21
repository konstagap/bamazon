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
    //    * The second message should ask how many units of the product they would like to buy.
    {
      type: "input",
      name: "userProductUnits",
      message: "How many units would you like to buy?",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }
])
 // 7. Once the customer has placed the order, your application should check
      //  if your store has enough of the product to meet the customer's request.
      .then(function(answer) {
        //  console.log(answer.userProductId)
        connection.query("SELECT * FROM products", function(err, res) {
