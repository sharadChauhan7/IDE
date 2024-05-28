import mysql2 from 'mysql2'

console.log(process.env.DB_PASSWORD);
const connection = mysql2.createConnection({
    host: 'localhost',
  user: 'root',
  database: 'test',
  password:process.env.DB_PASSWORD
});