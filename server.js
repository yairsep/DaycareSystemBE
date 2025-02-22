const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    console.log("Request from React app2");
    res.send("Hello, Express.js Server!!");
});

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

const port = process.env.PORT || 8080; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});