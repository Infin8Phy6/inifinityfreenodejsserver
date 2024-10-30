const mysql = require('mysql');

// Database connection configuration
const connection = mysql.createConnection({
  host: '185.27.134.215',
  user: 'if0_37577611',
  password: 'XFsOYKAFtpl',
  database: 'if0_37577611_depedv1'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the MySQL database');

  // Close the connection after logging
  connection.end((err) => {
    if (err) {
      console.error('Error closing the connection: ', err);
    } else {
      console.log('Connection closed');
    }
  });
});
