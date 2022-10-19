
/*conecta no db */
async function connect(){
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:joaog@localhost:3306/crud");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

/*função de inserir user*/
async function insertUser(user){
    const conn = await connect();
    const sql = 'INSERT INTO usuarios(nome_user,nickname,email,senha) VALUES (?,?,?,?);';
    const values = [user.nome, user.nick, user.email, user.senha];


/*pegar no html e enviar pro db*/

var register = document.getElementById('formreg');
var nome = document.getElementById('nome');
var nickname = document.getElementById('nickname');
var senha = document.getElementById('senha');
var email = document.getElementById('email')

register.addEventListener('submit', function(e) {
    // alerta o valor do campo
    user.nome=nome
    user.nickname=nickname
    user.senha=senha
    user.email=email

    // impede o envio do form
    e.preventDefault();
})

return await conn.query(sql, values);

}
