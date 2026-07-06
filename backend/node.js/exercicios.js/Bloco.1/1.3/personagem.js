const nome  = "Adalberto";
const classe    = "Mago";
const nivel = 17;
const vida  = 85;
const mana  = 2000;

function apresentar() {
    console.log("Nome:", nome);
    console.log("Classe:", classe);
    console.log("Nível", nivel);
    console.log("Vida:", vida);
    console.log("Mana:", mana);
}

module.exports = {
    apresentar
}