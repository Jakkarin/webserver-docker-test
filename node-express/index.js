const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Node.js + Express นะครับ');
});

app.get('/test', (req, res) => {
    res.send('Node.js + Express | TEST นะครับ');
});

app.get('/ssss', (req, res) => {
  process.exit(1);
});

// asdasasdasd
app.listen(3000, () => {
    console.log('http://0.0.0.0:3000 is OK.');
});