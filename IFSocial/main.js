/*Deifine o projeto do express (framework para administrar o "web server"*/
const express = require("express")

const path = require("path")

const app = express()

/*Define a porta onde a aplicação irá rodar*/
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

/*Inicia a aplicação*/
app.listen(port)
console.log("Aplicação rodando em 'http://localhost:"+port+"'")