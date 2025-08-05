const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'aviso-privacidad.html'));
});

// Ruta para el aviso de privacidad
app.get('/aviso-privacidad', (req, res) => {
    res.sendFile(path.join(__dirname, 'aviso-privacidad.html'));
});

// Ruta para el CSS
app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'));
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'aviso-privacidad.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    console.log(`📄 Aviso de Privacidad disponible en: http://localhost:${PORT}`);
}); 