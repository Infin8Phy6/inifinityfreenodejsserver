// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;

// MySQL database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Basic route for testing the connection
app.get('/', (req, res) => {
    res.send('Server is running and connected to the database!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
