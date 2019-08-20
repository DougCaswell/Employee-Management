require('dotenv').config();
const express = require('express');
const { PORT } = process.env;

let app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});