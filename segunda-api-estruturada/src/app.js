// Configurações e rotas
const express = require('express');
const salasController = require('./controllers/salas.controller');

const app = express();

app.use(express.json());

// Rotas
app.get('/salas', salasController.listar);
app.post('/salas', salasController.criar);
app.get('/salas/:id', salasController.buscarPorID);
app.put('/salas/:id', salasController.atualizar);
app.delete('/salas/:id', salasController.deletar);

module.exports = app;