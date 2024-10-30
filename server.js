const express = require('express');
const app = express();
const PORT = 3000; // You can change the port if needed

// Endpoint to send JSON data
app.get('/greet', (req, res) => {
    res.json({ Greetings: 'Hi from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
