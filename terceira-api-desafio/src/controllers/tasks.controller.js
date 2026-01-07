const tasksServices = require('../services/tasks.service');

function criar(req, res) {
    try {
        const task = tasksServices.criarTask(req.body);

        return res.status(201).json({
            message: "Task criado com sucesso!",
            task
        })

    } catch(error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

function listar(req, res) {
    const task = tasksServices.listarTask();

    return res.json({ task })
}

module.exports = {
    criar,
    listar
};