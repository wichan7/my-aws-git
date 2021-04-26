const express = require('express');
const db = require('./db');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`SERVER ON. port:${port}`);
});

app.get('/home', (req, res) => {
    console.log('visited');
    res.send('Hello World!');
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    console.log( db.getUser(id) );
    return res.json( db.getUser(id) );
});
