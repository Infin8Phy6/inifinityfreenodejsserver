const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql'); // Import MySQL

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL Database configuration
const db = mysql.createConnection({
    host: 'sql213.infinityfree.com',      // Use your InfinityFree host
    user: 'if0_37577611',                 // Your MySQL username
    password: 'XFsOYKAFtpl',              // Your MySQL password
    database: 'if0_37577611_depedv1'      // Your MySQL database name
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle sign up
app.post('/signup', (req, res) => {
    const { firstname, middlename, lastname } = req.body;
    console.log('Received data:', { firstname, middlename, lastname });

    // Prepare SQL query to insert data
    const sql = 'INSERT INTO studentdata (firstname, middlename, lastname) VALUES (?, ?, ?)';
    const values = [firstname, middlename, lastname];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Failed to insert data:', err);
            // Send an error response to Flutter
            res.status(500).json({ message: 'Failed to insert data into database' });
        } else {
            console.log('Data inserted successfully:', result);
            // Send a success response to Flutter
            res.json({
                message: 'Sign up successful!',
                data: {
                    firstname,
                    middlename,
                    lastname,
                    insertId: result.insertId // Optional: ID of the newly inserted row
                }
            });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
