const mysql = require('mysql');
const cnn = mysql.createConnection({
  host: 'localhost',
  user: 'blee',
  password: '1234',
  database: 'blee_db',
});

exports.getEmails = (cb) => {
  conn.query(`SELECT * FROM email`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('user.js:', rows);
    cb(rows);
  });
};
