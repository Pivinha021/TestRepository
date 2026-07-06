function validarNome(nome){
    if(nome.length >= 3) return nome;
    else console.log("ERRO!! O nome deve conter pelo menos 3 caracteres!!");
}
function validarIdade(idade){
    if(idade >= 0) return idade;
    else console.log("ERRO!! A idade não pode ser menor que 0!!");
}

module.exports = {
    validarIdade,
    validarNome
}