'use strict';

const express = require('express');

const PORT = 3000;

const app = express();

app.get('/',(req,res) => {
    res.send(`Node in port: ${PORT}`);
})

app.listen(PORT);
console.log(`running on port http://localhost:${PORT}`);