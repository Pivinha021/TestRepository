// Code:

const produto = {
    nome: "produto",
    preco: 50,
    categoria: "altos pode crê",
    emEstoque: true
};

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.categoria);
console.log(produto.emEstoque);


// Valores Alterados


produto.nome = "notebook";
produto.categoria = "eletronico";
produto.preco = 2600;
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.categoria);
console.log(produto.emEstoque);

// Add desconto

const desconto = 0.1;
produto.preco = 2600 - (2600 * desconto);
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.categoria);
console.log(produto.emEstoque);

// saida:

// produto
// 50
// altos pode crê
// true

// Valores Alterados

// notebook
// 2600
// eletronico
// true

// Add desconto

// notebook
// 2340
// eletronico
// true
