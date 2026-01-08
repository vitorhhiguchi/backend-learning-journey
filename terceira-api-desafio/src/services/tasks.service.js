// lista de tasks

const tasks = [];
const prioridadesValidas = ['baixa', 'media', 'alta'];

function criarTask(dados) {
    const { titulo, descricao, prioridade} = dados;

    if(!titulo || titulo.trim() === '') {
        throw new Error('Título da task é obrigatório');
    }

    if(!prioridadesValidas.includes(prioridade)) {
        throw new Error('Prioridade inválida!')
    }

    const novaTasks = { 
        id: tasks.length + 1,
        titulo: titulo,
        descricao: descricao || "",
        concluida: false,
        prioridade: prioridade
    }

    tasks.push(novaTasks)

    return novaTasks
}

function listarTask() {
    return tasks;
}

function buscarPorID(id){
    const task = tasks.find(s => s.id === id);

    if(!task) {
        throw new NotFoundError('Task não encontrada');
    }

    return task;
}


function marcarTask(id) {
    const task = buscarPorID(id);

    if(task.concluida) {
       throw new BadRequestError('Task já concluida!');
    }

    task.concluida = true;

    return task;
}

module.exports = {
    criarTask,
    listarTask,
    marcarTask
};