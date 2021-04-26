const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`SERVER ON. port:${port}`);
})

app.get('/home', (req, res) => {
    console.log('visited');
    res.send('Hello World!');
})
