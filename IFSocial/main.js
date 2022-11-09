/*Deifine o projeto do express (framework para administrar o "web server"*/
const express = require("express")
const path = require("path")

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')))

/*Define a porta onde a aplicação irá rodar*/
const port = process.env.PORT || 8080

/*Requisita as rotas do arquivo routes.js*/
require('./routes')(app);

/*Inicia a aplicação da porta definida*/
app.listen(port)
console.log("Aplicação rodando em 'http://localhost:"+port+"'")