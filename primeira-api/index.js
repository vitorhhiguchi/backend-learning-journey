const express = require('express');

const app = express();

// Lista de Salas
const salas = [];

// Lista de jogos
const jogos = [];

// Configura o servidor para receber JSON
app.use(express.json());

app.get('/hello', (req, res) => {
    return res.json({
        message: 'Olá Backend!'
    });
});

// Código ex
app.get('/salas', (req, res) => {
    return res.json({
        salas
    });
});

app.post('/salas', (req, res) => {
    const { nome, capacidade } = req.body;

    // Validações de campo
    if(!nome || nome.trim() === '') {
        return res.status(400).json({
            message: 'Nome da sala é obrigatório, preencha corretamente!'
        })
    }

    // Esse typeof vai falar que tipo é minha variavel, e se ele não for um number,
    // Ele vai retornar um erro
    if( 
        typeof capacidade !== 'number' || 
        !Number.isInteger(capacidade)  || 
        capacidade <= 0                ||
        Number.isNaN(capacidade)
    ) {
        return res.status(400).json({
            message: 'Capacidade da sala invalida! Deve ser um número maior que zero'
        })
    }

    const novaSala = {
        id: salas.length + 1,
        nome,
        capacidade
    };

    salas.push(novaSala);

    return res.status(201).json({
        message: "Sala criada com sucesso",
        sala: novaSala
    })
})

// Codigos testes por conta
app.get('/jogos', (req, res) => {
    return res.json({
        jogos
    })
})

app.post('/jogos', (req, res) => {
    const { nome, genero } = req.body;

    const novoJogo = {
        id: jogos.length + 1,
        nome,
        genero
    }

    jogos.push(novoJogo);

    return res.status(201).json({
        jogos,
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});