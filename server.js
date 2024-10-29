const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// POST route to handle sign up
app.post('/signup', (req, res) => {
    const { firstname, middlename, lastname } = req.body;
    console.log('Received data:', { firstname, middlename, lastname }); // Log the received data
    res.json({ message: 'Sign up successful!', receivedData: req.body });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
