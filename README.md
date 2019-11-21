
## Instructions
## Demonstation link https://www.youtube.com/watch?v=_uyh0_jGnEs
### Customer View

1. Application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

2. The app should then prompt users with two messages.

   - The first should ask them the ID of the product they would like to buy.
   - The second message should ask how many units of the product they would like to buy.

3. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

4. However, if store _does_ have enough of the product, request will fulfill the customer's order.
   - This means updating the SQL database to reflect the remaining quantity.
   - Once the update goes through, app shows the total cost of purchase.

### Manager View

- Application called `bamazonManager.js`. Running this application will:

  - List a set of menu options:

    - View Products for Sale

      - the app should list every available item: the item IDs, names, prices, and quantities.

    - View Low Inventory
      - list all items with an inventory count lower than five.
    - Add to Inventory
      - app should display a prompt that will let the manager "add more" of any item currently in the store.
    - Add New Product
      - app should allow the manager to add a completely new product to the store.

### Supervisor View 

1. I create new MySQL table called `departments`. Table include the following columns:

   - department_id

   - department_name

   - over_head_costs (A dummy number you set for each department)

2. Running `bamazonSupervisor.js` application will list a set of menu options:

   - View Product Sales by Department

   - Create New Department

3. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

4. The `total_profit` column calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` . Table is not be stored in any database. 
