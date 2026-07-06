const ataque = process.argv[2]; 
const defesa = process.argv[3]; 

const dano = ataque - defesa;

if(dano < 0) dano = 0;

console.log("Ataque:", ataque);
console.log("Defesa adversária:", defesa);

console.log("--| Dano Causado |--");
console.log("[" + dano + "]");