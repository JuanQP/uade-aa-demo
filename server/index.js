const { networkInterfaces } = require('os');
const path = require('path');
const express = require("express");
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/ping', (req, res) => {
  const now = new Date();
  const ip = Object.values(networkInterfaces()).flat().find((i) => i?.family === 'IPv4' && !i?.internal)?.address;

  const response = {
    message: `${now.toLocaleString()}: ServerIP ${ip}`,
  };

  return res.status(200).send(response);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.render(path.resolve(__dirname, '../client/dist', 'index.html'), {});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}...`);
});
