const http = require('http');
const express = require('express');

const HOST = '127.0.0.1';
const PORT = 3001;

let app = express();

app.set('views','./views');
app.set('view engine','pug');
app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
  res.render('home.pug',{
    title: 'Ragnarok Server',
    message: 'Oz & Bernalophitecus Ragnarok Server'
  })
})

app.get('/db',(req, res) => {
  res.render('db.pug',{
    title: 'Ragnarok Server | Database',
    message: 'Coming soon...'
  })
})

app.listen(PORT, HOST);
