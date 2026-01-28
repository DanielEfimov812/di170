-- Fetch all of the data from the table.
-- Fetch all of the students first_names and last_names.
-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
-- Fetch the students whose first_names contain the letter a.
-- Fetch the students whose first_names start with the letter a.
-- Fetch the students whose first_names end with the letter a.
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- Fetch the students whose id’s are equal to 1 AND 3 .
-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).


select * from student;
select first_name,last_name from student;
select first_name,last_name from student where id=2;
select first_name,last_name from student where last_name = 'Benichou' AND first_name = 'Marc';
select first_name,last_name from student where last_name = 'Benichou' or first_name = 'Marc';
select first_name,last_name from student where first_name ilike '%a%';
select first_name,last_name from student where first_name ilike 'a%';
select first_name,last_name from student where first_name ilike '%a';
select first_name,last_name from student where SUBSTRING (first_name FROM LENGTH(first_name) - 1 FOR 1) ILIKE 'a';
select first_name,last_name from student where id=1 and id=3;
select * from student where birth_date >= '1/01/2000';
