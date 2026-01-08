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

function marcar(req, res) {
    try {
        const id = Number(req.params.id); //precisa-se usar Number, pois o ID vem como string
        const task = tasksServices.marcarTask(id);

        return res.status(200).json({
            message: 'Task concluida!',
            task
        })

    } catch(error) {

        if(error instanceof NotFoundError) {
            return res.status(404).json({ message: error.message })
        }   

        if(error instanceof BadRequestError) {
            return res.status(400).json({ message: error.message })
        }

        return res.status(500).json({
            message: 'Erro interno do servidor'
        })
    }
}

module.exports = {
    criar,
    listar,
    marcar
};