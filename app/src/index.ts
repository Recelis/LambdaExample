const express = require('express');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(port || 8000, () => console.log('App is listening on port 8000.'));