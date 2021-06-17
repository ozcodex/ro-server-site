const http = require('http');
const express = require('express');

const HOST = '127.0.0.1';
const PORT = 3001;

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
  res.set('Content-Type', 'text/plain');
  res.status(200);
  res.send('This is the Oz & Bernalophitecus Ro Server\n');
})

app.listen(PORT, HOST);
