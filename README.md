## Overview

In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.

## Submission Guide

Make sure you use the normal GitHub. Because this is a CLI App, there will be no need to deploy it to Heroku. This time, though, you need to include screenshots, a gif, and/or a video showing us that you got the app working with no bugs. You can include these screenshots or a link to a video in a `README.md` file.

- Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).

- Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works.

- Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.

If you haven't written a markdown file yet, [click here for a rundown](https://guides.github.com/features/mastering-markdown/), or just take a look at the raw file of these instructions.

## Instructions

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