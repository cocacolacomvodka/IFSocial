const db = require('./db.js')

function login(data, req, res) {
    db.query_user(data, (err, result) => {
        if (err) {
            console.log(err)
        } else if (result.length > 0) {
            res.redirect('/')
            res.end()
        }
    }) 
}

module.exports = {login}