const agente = require("./agente");

agente.nome = process.argv[2];
agente.classe = process.argv[3];
agente.nivel = process.argv[4];

console.log(`===== Cadastro de Agente =====`);
console.log(`Nome:   ${agente.nome}        `);
console.log(`Classe: ${agente.classe}      `);
console.log(`Nível:  ${agente.nivel}       `);
console.log(`Rank:   ${agente.rank}        `);
console.log(`==============================`);