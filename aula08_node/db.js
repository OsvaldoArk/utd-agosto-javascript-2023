const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: '',
    password:'',
    database: 'db_projeto'
});

module.exports = conexao;