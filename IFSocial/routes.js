const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const mysql = require('mysql');
const connection = mysql.createPool({
  host     : 'ip',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

const app = express();

/*module.exports define que tudo dentro do escopo sera exportado*/
module.exports = function(app){
  /*Define a rota para a pagina index.html*/
  app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '/views/index.html'))
  })

  /*Define a rota para a pagina login.html*/
  app.get('/login.html', (req, res) => {
      res.sendFile(path.join(__dirname, '/views/login.html'))
  })

  /*Define a rota para a pagina register.html*/
  app.get('/register.html', (req, res) => {
      res.sendFile(path.join(__dirname, '/views/register.html'))
  })

}