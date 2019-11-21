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
    optionList();
  });

  function optionList() {
    inquirer
      .prompt({
        name: "managerOptions",
        type: "list",
        message: "Choose between options",
        choices: [
          "View Products for Sale",
          "View Low Inventory",
          "Add to Inventory",
          "Add New Product",
          "Exit"
        ]
      }).then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.managerOptions === "View Products for Sale") {
          displayProducts();
        } else if (answer.managerOptions === "View Low Inventory") {
            displayLowInventory();
        } else if (answer.managerOptions === "Add to Inventory") {
            addToInventory();
        } else if (answer.managerOptions === "Add New Product") {
            addNewProduct();
        } else {
            connection.end();
          }
        });
    }
    function displayProducts() {
        connection.query("SELECT * FROM products", function(err, res) {
          if (err) throw err;
          console.log("\n");
          console.table(res);
          console.log("\n");
          optionList();
        });
      }
      function displayLowInventory() {
        connection.query("SELECT * FROM products WHERE stock_quantity <5", function(
          err,
          res
        ) {
          if (err) throw err;
          console.log("\n");
          console.table(res);
          console.log("\n");
          optionList();
        });
      }
      //  * If a manager selects `Add to Inventory`, your app should display a prompt that will
//  let the manager "add more" of any item currently in the store.
function addToInventory() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    var items = [];
    for (i = 0; i < res.length; i++) {
      items.push(`ID:${res[i].item_id} NAME:${res[i].product_name}`);
    } inquirer
    .prompt([
      {
        type: "rawlist",
        name: "addToItem",
        message: "Choose what item would you like to add to",
        choices: items
      },