const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Make sure to install axios using npm install axios

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Handle signup data
app.post('/signup', async (req, res) => {
    const { firstname, middlename, lastname } = req.body;
    console.log('Received data:', { firstname, middlename, lastname });

    try {
        // Send data to PHP file
        const response = await axios.post('https://your-php-url.com/yourfile.php', {
            firstname,
            middlename,
            lastname
        });

        // Return response from PHP to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error sending data to PHP:', error);
        res.status(500).json({ message: 'Failed to send data to PHP.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
