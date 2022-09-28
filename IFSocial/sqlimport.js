           /*import*/
           const express = require('express');
           const bodyParser = require('body-parser');
           const mysql = require('mysql');
           const connection = mysql.createPool({
           
           host     : 'ip_muito_legal_do_nosso_servidor',
           user     : 'jungkook_do_vasco',
           password : 'vasco',
           database : 'ifsocial'
});

const app = express();

           // Criando uma rota GET que retorna os dados da tabela usuários.
           app.get('/pst', function (req, res) {
           // Conectando ao banco.
           connection.getConnection(function (err, connection) {
   
           // Executando a query MySQL (selecionar todos os dados da tabela usuário).
           connection.query('SELECT * FROM post', function (error, results, fields) {
           // Caso ocorra algum erro, não irá executar corretamente.if (error) throw error;
     
           // Pegando a 'resposta' do servidor pra nossa requisição. Ou seja, aqui ele vai mandar nossos dados.
           res.send(results)
   });
 });
});