INSERT INTO employee (first_name, last_name, email_address, phone_number)
VALUES ($1, $2, $3, $4);

SELECT *
FROM employee;