class usuario  {
    constructor(nome, idade){
        if(nome.length < 3) throw new Error("ERRO!! Nome deve conter pelo menos 3 caracteres!");

        if(idade < 0) throw new Error("ERRO!! Idade não pode ser menor que 0!");

        this.nome = nome;
        this.idade = idade
    }
}

const listaUsuarios = [];

function listarUsuario (nome, idade){
    try{
        const novoUsuario = new usuario(nome, idade);
        listaUsuarios.push(novoUsuario);
        console.log(`Usuário ${nome} adicionado com sucesso!`);
    }
    catch (erro){
        console.log(erro.message);
    }
}

function buscaUsuario(nome) {
    const usuarioEncontrado = listaUsuarios.find(u => u.nome === nome);
    
    if (usuarioEncontrado) {
        console.log("Usuário encontrado!");
        return usuarioEncontrado;
    } else {
        console.log("Usuário não encontrado...");
        return null;
    }
}

module.exports = {
    usuario,
    listaUsuarios,
    listarUsuario,
    buscaUsuario
}