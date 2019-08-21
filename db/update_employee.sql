UPDATE employee
SET first_name = $2, last_name = $3, email_address = $4, phone_number = $5
WHERE employee_id = $1;

SELECT *
FROM employee;