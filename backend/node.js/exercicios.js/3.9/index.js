const ouro = process.argv[2];
const comprar = process.argv[3];

const item1 = require("./item.js");
item1.definir("grimorio", 150);
const item2 = require("./item.js");
item2.definir("espada", 50);

switch(comprar){
    case "1": 
        if(ouro <= item1.preco){
            console.log("Ouro insuficiente");
            console.log(`Faltam ${item1.preco - ouro} moedas!`);
        }
        else console.log(`Item: ${item1.nome} Comprado com sucesso!`);
    break;
    case "2": 
        if(ouro <= item2.preco){
            console.log("Ouro insuficiente");
            console.log(`Faltam ${item2.preco - ouro} moedas!`);
        }
        else console.log(`Item: ${item2.nome} Comprado com sucesso!`);
    break;
    default:
        console.log("Opção invalida!!");
}






