require('dotenv').config();
const express = require('express');
const massive = require('massive');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

let app = express();

app.use(express.json());

app.get('/api/employees', async (req, res) => {
    const db = req.app.get('db');
    const employees = await db.get_all_employees().catch((error) => {
        console.log(error)
        return res.sendStatus(500)
    });
    return res.status(200).send(employees);
});

app.post('/api/new', async (req, res) => {
    const { firstName, lastName, email, phone } = req.body;
    const db = req.app.get('db');
    const employees = await db.new_employee(firstName, lastName, email, phone);
    res.status(200).send(employees);
});


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log(`Server is running on port: ${SERVER_PORT}`);
    });
});
