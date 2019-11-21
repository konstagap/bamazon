DROP TABLE departments;

CREATE TABLE departments(
department_id INT NOT NULL AUTO_INCREMENT,
 department_name VARCHAR(100) NOT NULL,
 over_head_costs INT(50) NOT NULL ,
   PRIMARY KEY (department_id)
   );
INSERT INTO departments (`department_name`,`over_head_costs`) VALUES ('electronics',2);
INSERT INTO departments (`department_name`,`over_head_costs`) VALUES ('shirts',2);
INSERT INTO departments (`department_name`,`over_head_costs`) VALUES ('food',2);
INSERT INTO departments (`department_name`,`over_head_costs`) VALUES ('cosmetic',2);
INSERT INTO departments (`department_name`,`over_head_costs`) VALUES ('basics',2);


SELECT department_id, departments.department_name, over_head_costs,SUM(product_sales) as product_sales,SUM(product_sales)-over_head_costs as total_profit 
FROM departments
LEFT JOIN products 
ON departments.department_name=products.department_name
 GROUP BY department_name
  ORDER BY departments.department_id;
