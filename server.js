const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000; // You can change the port if needed
app.use(cors());
// Endpoint to send JSON data
app.get('/greet', (req, res) => {
    res.json({ Greetings: 'Hi from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
