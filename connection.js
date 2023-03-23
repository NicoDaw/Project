const { Pool } = require('pg')
require('dotenv').config();


// Creamos una instancia de la clase Pool con los parámetros de configuración
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.PORT,
});

const db = {
    query: (str) => {
        pool.connect()
        console.log('llega');
        return pool.query(str)
    },
    execute: async (str) => {
        pool.connect()
        await pool.execute(str)
    }
}


module.exports = db