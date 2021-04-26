const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`SERVER ON. port:${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})