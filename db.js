// db.js
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'SAMARTHA@11', 
  database: 'CLUELESS', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
