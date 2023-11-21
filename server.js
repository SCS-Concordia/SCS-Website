const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about-us.html'));
});

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'events.html'));
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
