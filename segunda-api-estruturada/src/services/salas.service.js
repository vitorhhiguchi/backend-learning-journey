/* regra de negócio (o cérebro)
📌 Aqui:

Não existe req

Não existe res

Só regra de negócio
 */

const salas = [];

function listarSalas() {
    return salas;
}

function criarSalas(dados) {
    const { nome, capacidade } = dados;

    if(!nome || nome.trim() === '') {
        throw new Error('Nome da sala é obrigatório');
    }

    if(!Number.isFinite(capacidade) || capacidade <= 0){
        throw new Error('Capacidade inválida');
    }

    const novaSala = {
        id: salas.length + 1,
        nome: nome,
        capacidade: capacidade
    }

    salas.push(novaSala);

    return novaSala;
}

function buscarSalaPorID(id){ 
    const sala = salas.find(s => s.id === id);

    if(!sala) {
        throw new Error('Sala não encontrada');
    }

    return sala;
}

function atualizarSala(id, dados) {
    const sala = buscarSalaPorID(id);

    const { nome, capacidade } = dados;

    if(!nome || nome.trim() === ''){
        throw new Error('Nome da sala é obrigatório');
    }

    if(!Number.isFinite(capacidade) || capacidade <= 0){
        throw new Error('Capacidade inválida');
    }

    sala.nome = nome;
    sala.capacidade = capacidade;

    return sala;
}

function deletarSala(id) {
    // da pra deixar dessa maneira, porém tem uma maneira com reaproveitamento de código
    // const index = salas.findIndex(s => s.id === id);
    const sala = buscarSalaPorID(id);
    const index = salas.indexOf(sala);

    // Caso não ache a sala
    if (index === -1) {
        throw new Error('Sala não encontrada')
    }

    // Retira da lista de salas o index e 1 unidade
    salas.splice(index, 1);
}

module.exports = {
    listarSalas,
    criarSalas,
    buscarSalaPorID,
    atualizarSala,
    deletarSala
}