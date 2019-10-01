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

function optionsList(){
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
        optionsList();}
        else{
            connection.end();
        }
})
}

function salesByDepartment(){
 connection.query("SELECT department_id, departments.department_name, over_head_costs,SUM(product_sales) as product_sales,SUM(product_sales -over_head_costs) as total_profit FROM departments LEFT JOIN products ON departments.department_name=products.department_name GROUP BY department_name ORDER BY departments.department_id ", function(err, res) {
    if (err) throw err;
    console.table(res)
    optionsList()
  });

}


// . When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in
//  their terminal/bash window. Use the table below as a guide.

// | department_id | department_name | over_head_costs | product_sales | total_profit |
// | ------------- | --------------- | --------------- | ------------- | ------------ |
// | 01            | Electronics     | 10000           | 20000         | 10000        |
// | 02            | Clothing        | 60000           | 100000        | 40000        |

// 5. The `total_profit` column should be calculated on the fly using the difference between 
//`over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.

// 6. If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to the `departments` table.