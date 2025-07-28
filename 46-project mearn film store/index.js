require('dotenv').config();
const express = require('express');
const colors = require('colors');
const app = express();

console.log(process.env.NODE_ENV);
console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {

    console.log('Received a request at /');
    res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode.` .bgBlue.white.bold);
});