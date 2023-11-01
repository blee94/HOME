const mysql = require('mysql');
const cnn = mysql.createConnection({
  host: 'localhost',
  user: 'blee',
  password: '1234',
  database: 'blee_db',
});

connection.connect();

connection.query('SELECT * FROM index', function (error, result, fields) {
  if (error) throw error;
  console.log('The solution is: ', result[0].solution);
});

connection.end();
