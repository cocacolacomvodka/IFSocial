const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

/*
const mysql = require('mysql');
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
*/
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

  /* Quaquer pessoa que acessar a rota /users teria toda inforação de todos os usuarios com esta query.
   * Vamos utilizar funções isoladas para fazer as query e não inserir elas nas rotas

  // Criando uma rota GET que retorna os dados da tabela usuários.
  app.get('/users', function (req, res) {
      // Conectando ao banco.
      connection.getConnection(function (err, connection) {
      
      // Executando a query MySQL (selecionar todos os dados da tabela usuário).
      connection.query('SELECT * FROM users', function (error, results, fields) {
        // Caso ocorra algum erro, não irá executar corretamente.if (error) throw error;
        
        // Pegando a 'resposta' do servidor pra nossa requisição. Ou seja, aqui ele vai mandar nossos dados.
        res.send(results)
      });
    });
  });*/
}