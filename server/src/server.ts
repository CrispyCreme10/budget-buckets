import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const transactions = require('./db/mongo');

const app = express();
const port = 3000;

// routes
app.use('/transactions', transactions)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
})