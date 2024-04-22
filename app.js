const express = require('express');
const menuRoutes = require('./src/Routes/MenuRoutes');

const app = express();

// Configurar el motor de vistas y el directorio de vistas
app.set('view engine', 'ejs');
app.set('views', './src/views'); // Establece el directorio de vistas en './src/views'

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Configurar las rutas
app.use('/', menuRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
