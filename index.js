// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
    res.send('Hello, People!');
});

// Handling dynamic GET requests with query parameters
app.get('/api/data', (req, res) => {
    const { kemi, age } = req.query;
    res.json({ message: `Hello, ${kemi}! You are ${age} years old.` });
});

// Handling POST requests
app.post('/api/data', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Received data for ${tayo}, age ${37}` });
});

// Handling PUT requests
app.put('/api/data/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    res.json({ message: `Updated record ${id} with name ${Titi} and age ${22}` });
});

// Handling DELETE requests
app.delete('/api/data/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Deleted record with id ${id}` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
