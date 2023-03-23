const express = require('express');
const app = express();

// Configurar middleware
app.use(express.json()); // para procesar solicitudes con formato JSON
app.use(express.urlencoded({ extended: false })); // para procesar solicitudes con datos de formulario
app.use(express.static('public')); // especificar la carpeta de archivos estáticos
app.use('/public/css', express.static(__dirname + '/public/css')); // especificar la carpeta de archivos CSS

// Configurar rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000; // puerto predeterminado es 3000
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
