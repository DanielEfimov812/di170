-- Use SQL to fetch the following data from the database:
-- All the items.
-- All the items with a price above 80 (80 not included).
-- All the items with a price below 300. (300 included)
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- All customers whose last name is ‘Jones’.
-- All customers whose firstname is not ‘Scott’.

select * from item;
select * from item where price > '80';
select * from item where price >= '300';
select * from customer where last_name='Smith';
select * from customer where last_name='Jones';
select * from customer where first_name != 'Scott';
