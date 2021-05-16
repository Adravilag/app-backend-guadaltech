require('dotenv').config();

const { dbConnection } = require('./database/config');

const express = require('express')
const cors = require('cors');

const app = express()

// Middlewares

// Configurar CORS
app.use(cors());

// Lectura y parseo del Body
app.use(express.json());

// Base de datos
dbConnection();

// Rutas
app.use('/api/personas', require('./routes/personas'));

app.listen(process.env.PORT, () => console.log(`Servidor funcionando en puerto ${process.env.PORT}`))