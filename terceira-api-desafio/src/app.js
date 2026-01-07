const express = require('express');
const tasksController = require('./controllers/tasks.controller');

const app = express();

app.use(express.json());

// Rotas
app.post('/tasks', tasksController.criar);
app.get('/tasks', tasksController.listar);

module.exports = app;