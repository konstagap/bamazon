CREATE database bamazon_db;
USE bamazon_db;
CREATE TABLE products(
item_id  INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(40) NOT NULL,
department_name VARCHAR(40) NOT NULL,
price INTEGER(20),
stock_quantity INTEGER(20),
primary key (item_id)
)
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('ipad air','electronics',100,13,100);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('apple watch','electronics',50,4,50);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('green beans','food',10,76,10);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('lipstick','cosmetic',15,75,15);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('grey goose vodka','food',65,29,65);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('illy coffee','food',35,19,35);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('white t-shirts','basics',3,99,3);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('sweat pants','basics',25,41,25);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('toothpaste','cosmetic',8,39,8);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('shampoo','cosmetic',14,23,56);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('ipod classic','electronics',30,12,30);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('macbook air','electronics',200,13,200);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('milk','food',2,13,6);
INSERT INTO products (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES ('mens shirt','shirts',3,97,9);
