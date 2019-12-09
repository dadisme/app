var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Zl8075462',
  database: 'app'
});

connection.connect();

module.exports = connection;
