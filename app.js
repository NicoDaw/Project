const express = require('express');
const app = express();
const path = require('path')
const db = require('./connection')

// Importamos la clase Pool del paquete pg
// const { Pool } = require('pg');
// require('dotenv').config();

// Creamos una instancia de la clase Pool con los parámetros de configuración
// const pool = new Pool({
//   user: process.env.POSTGRES_USER,
//   host: process.env.POSTGRES_HOST,
//   database: process.env.POSTGRES_DB,
//   password: process.env.POSTGRES_PASSWORD,
//   port: process.env.PORT,
// });

// Conectamos a la base de datos
// pool.connect((err, client, done) => {
//   if (err) {
//     console.error('Error de conexión:', err);
//   } else {
//     console.log('Conexión a la base de datos establecida');
//   }
// });

// Configurar middleware
app.use(express.json()); // para procesar solicitudes con formato JSON
app.use(express.urlencoded({ extended: false })); // para procesar solicitudes con datos de formulario
app.use(express.static('public')); // especificar la carpeta de archivos estáticos
app.use('/public/css', express.static(__dirname + '/public/css')); // especificar la carpeta de archivos CSS
app.use('/empleados', require('./routes/empleados'))
app.use('/pedidos', require('./routes/pedidos'))
app.use('/productos', require('./routes/productos'))

// Configurar rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
});

// Iniciar el servidor
const PORT = 3000; // puerto predeterminado es 3000
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});

