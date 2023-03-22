// Importamos la clase Pool del paquete pg
const { Pool } = require('pg');

// Creamos una instancia de la clase Pool con los parámetros de configuración
const pool = new Pool({
  user: 'postgres',  
  host: 'localhost', 
  database: 'Northwind', 
  password: 'badia123',
  port: 5432,
});

// // Exportamos un objeto con una función query que utiliza el pool de conexiones
// module.exports = {
//   db: (text, params) => pool.db(text, params),
// };
