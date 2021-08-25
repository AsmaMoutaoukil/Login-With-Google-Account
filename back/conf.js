
const mysql = require('mysql')
require('dotenv').config();
const connection = mysql.createConnection({
    host : 'localhost',
    user : process.env.USER_DATABASE,
    password : process.env.PASSWORD ,  
    database : process.env.DATABASE,
    charset : 'utf8mb4',
    multipleStatements: true

})
// open the MySQL connection
connection.connect(error => {
    if (error){
      console.log("database not connected");
    return false 
    } 
    console.log("Successfully connected to the database.");
  });
module.exports = connection;

