const express = require('express');
const cors = require('cors'); // Make sure this line is present and correct

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable for hosting, default to 3000

app.use(cors()); // Enable CORS for all routes

// Endpoint to send JSON data
app.get('/greet', (req, res) => {
    res.json({ Greetings: 'Hi from the server!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
