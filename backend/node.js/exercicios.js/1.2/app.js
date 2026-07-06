const mensagens =  require("./mensagens");
const nome = process.argv[2];

console.log(mensagens.boasVindas(nome));
console.log(mensagens.despedida(nome));

console.log("Autor do sistema:", mensagens.autorSistema);