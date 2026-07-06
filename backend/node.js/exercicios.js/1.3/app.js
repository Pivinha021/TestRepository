const validacoes = request("./validacoes");

const nome = validacoes.validarNome(process.argv[2]);
const idade = validacoes.validarIdade(process.argv[3]);

console.log("Nome:", nome);
console.log("Idade:", idade);