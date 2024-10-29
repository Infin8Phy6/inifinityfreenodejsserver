const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Import axios

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle sign up
app.post('/signup', async (req, res) => {
    const { firstname, middlename, lastname } = req.body;
    console.log('Received data:', { firstname, middlename, lastname });

    // Prepare the data to send to the PHP file
    const dataToSend = {
        firstname,
        middlename,
        lastname
    };

    try {
        // Send data to the PHP file
        const phpResponse = await axios.post('http://edufiles.great-site.net/insert.php', dataToSend);

        // Respond back to the Flutter app
        res.json({ message: 'Sign up successful!', receivedData: req.body, phpResponse: phpResponse.data });
    } catch (error) {
        console.error('Error sending data to PHP:', error);
        res.status(500).json({ message: 'Failed to send data to PHP file' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
