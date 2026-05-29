// code:

const estoque = {
    produtos: [],
    adicionarProdutos: function(nome, preco, quantidade){
        const produto = {
            nome: nome,
            preco: preco,
            quantidade: quantidade,
            descricao: function(){
                console.log("--[Produto]--");
                console.log(`| nome: ${this.nome} | preço: R$${this.preco} | quantidade ${this.quantidade} unidades |`);
            }
        }
        this.produtos.push(produto);
    },
    listarProdutos: function(){
        console.log("-----[Estoque]-----");
        for(let i = 0; i < this.produtos.length; i++){
            console.log(`[${i+1}]`, this.produtos[i]);
        }
    },
    buscarProduto: function(nome){
        for(i = 0; i < this.produtos.length; i++){
            if(this.produtos[i].nome == nome){
                return this.produtos[i];
            }
        }
    },
    valortotal: function(){
        let valor = 0;
        for(i = 0; i < this.produtos.length; i++){
            valor += this.produtos[i].preco * this.produtos.quantidade;
        }
        return valor;
    }
}

// Adicionando Produtos ao estoque

estoque.adicionarProdutos("Sansung Galaxy S25",5399.90, 23);
estoque.adicionarProdutos("Notebook Nitro5",   8569.90, 15);
estoque.adicionarProdutos("AMD Ryzen 5 5670",  3689.90, 8);
estoque.adicionarProdutos("POCO X7 PRO",       5089.90, 9);
estoque.adicionarProdutos("Mouse Gamer",       89,90,	15);
estoque.adicionarProdutos("Teclado Mecânico",  249,90,	8);
estoque.adicionarProdutos("Headset Bluetooth", 179,90,	12);
estoque.adicionarProdutos("Monitor 24",        899,90,	5);
estoque.adicionarProdutos("Cadeira Gamer",     1.299,90,3);
estoque.adicionarProdutos("SSD 1TB",           459,90,	10);

// Listando produtos em estoque e valor total do estoque

estoque.listarProdutos();
estoque.valortotal();

// Buscando produto em estoque

let produto = estoque.buscarProduto("AMD Ryzen 5 5670");
produto.descricao();

// Saída:

// [1] {
// nome: 'Sansung Galaxy S25',
// preco: 5399.9,
// quantidade: 23,
// descricao: [Function: descricao]
// }
// [2] {
// nome: 'Notebook Nitro5',
// preco: 8569.9,
// quantidade: 15,
// descricao: [Function: descricao]
// }
// [3] {
// nome: 'AMD Ryzen 5 5670',
// preco: 3689.9,
// quantidade: 8,
// descricao: [Function: descricao]
// }
// [4] {
// nome: 'POCO X7 PRO',
// preco: 5089.9,
// quantidade: 9,
// descricao: [Function: descricao]
// }
// [5] {
// nome: 'Mouse Gamer',
// preco: 89,
// quantidade: 90,
// descricao: [Function: descricao]
// }
// [6] {
// nome: 'Teclado Mecânico',
// preco: 249,
// quantidade: 90,
// descricao: [Function: descricao]
// }
// [7] {
// nome: 'Headset Bluetooth',
// preco: 179,
// quantidade: 90,
// descricao: [Function: descricao]
// }
// [8] {
// nome: 'Monitor 24',
// preco: 899,
// quantidade: 90,
// descricao: [Function: descricao]
// }
// [9] {
// nome: 'Cadeira Gamer',
// preco: 1.299,
// quantidade: 90,
// descricao: [Function: descricao]
// }
// [10] {
// nome: 'SSD 1TB',
// preco: 459,
// quantidade: 90,
// descricao: [Function: descricao]
// }
// --[Produto]--
// | nome: AMD Ryzen 5 5670 | preço: R$3689.9 | quantidade 8 unidades |