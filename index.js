const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, People!');
});

// Handling dynamic GET request with query parameters
app.get('/api/data', async (req, res) => {
    const { name, age } = req.query;
    res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});

// Handling dynamic GET request with path parameters
app.get('/api/data/:id', async (req, res) => {
    const { name, age } = req.query;
    res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});

// Handling POST requests
app.post('/api/data', async (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Received data for ${name}, age ${age}` });
});

// Handling PUT requests
app.put('/api/data/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    res.json({ message: `Updated record ${id} with name ${name} and age ${age}` });
});

// Handling DELETE requests
app.delete('/api/data/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Deleted record with id ${id}` });
});

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3000');
});
