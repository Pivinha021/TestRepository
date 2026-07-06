const usuario = {
    nome = "adalbertino",
    idade = 28
}

const listaUsuarios = [];

function criarUsuario(nome, idade){
    if(nome.length < 3) console.log("ERRO!! Nome deve conter pelo menos 3 caracteres!");
    else this.nome = nome;
    if(idade < 0) console.log("ERRO!! idade nao pode ser menor que 0!");
    else this.idade = idade;
}

function listarUsuario (usuario){
    if(usuario === this.usuario) listaUsuarios.push(usuario);
    else console.log("ERRO!! Usuario não compativel!");
}