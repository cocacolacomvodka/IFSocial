const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ifsocial'
})

function query_user(data, callback) {
    connection.query('SELECT * FROM users WHERE email = ? AND senha = ? OR ;', [data.if, data.senha], function(error, results, fields) {
        if (error) {
            callback(error, null)
        };
        if (results.length > 0) {
            console.log(results)
            callback(null, results)
        }
        console.log(data)
    })
}

module.exports =  { query_user}