const express = require('express');
const app = express();
const cors = require('cors');
const { port } = require('./config');

app.use(cors())

app.get('/', (req, res) => {
    console.log("Request from fe");
    res.send("Hello, Express.js Server!!");
});

app.get('/api', (req, res) => {
    console.log("Request to api route");
    res.send("Hello from /api route!");
});

// You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});