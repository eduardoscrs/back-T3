require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Usamos el pool con promesas para facilitar async/await
const promisePool = pool.promise();

// Prueba de conexión
async function testConnection() {
    try {
        const [rows] = await promisePool.query('SELECT 1 + 1 AS result');
        console.log('Conexión exitosa a la base de datos:', rows[0].result);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

// Ejecuta la prueba de conexión
testConnection();

module.exports = promisePool;
