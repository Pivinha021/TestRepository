let nome = "Item";
let preco = 0;

function definir(nome, preco){
    this.nome = nome;
    if(preco <= 0) this.preco = 0;
    else this.preco = preco;
}

module.exports = {
    nome,
    preco,
    definir
}
