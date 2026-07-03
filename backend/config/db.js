import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'prathika20',
    database: 'lambda_db'
});

console.log('Connected to MySQL database');

export default db;