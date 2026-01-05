/* 
📌 Controller: fala com o cliente

Recebe req

Passa dados

Trata erro

Devolve resposta
 */

const salasService = require('../services/salas.service');

function listar(req, res) {
    const salas = salasService.listarSalas();

    return res.json({ salas });
}

function criar(req, res) {
    try {
        const sala = salasService.criarSalas(req.body);

        return res.status(201).json({
            message: 'Sala criada com sucesso!',
            sala
        });
    }catch(error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

function buscarPorID(req, res) {
    try{
        const id = Number(req.params.id);
        const sala = salasService.buscarSalaPorID(id);

        return res.json({ sala })
    } catch(error) {
        return res.status(404).json({ //404 é pq é not found
            message: error.message
        })
    }
}

function atualizar(req, res) {
    try {
        const id = Number(req.params.id);
        const sala = salasService.atualizarSala(id, req.body);

        return res.json({
            message: 'Sala atualizada com sucesso',
            sala
        })
    } catch(error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

function deletar(req, res) {
    try{
        const id = Number(req.params.id);
        salasService.deletarSala(id);

        return res.status(204).send(); 
    } catch(error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

module.exports = {
    listar,
    criar,
    buscarPorID,
    atualizar,
    deletar
};