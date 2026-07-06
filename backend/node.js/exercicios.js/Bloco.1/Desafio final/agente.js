const nome;
const classe;
const nivel;
const rank = nivel <= 10 ? "Recruta" : nivel >= 21 ? "Especialista" : "Investigador";

module.exports = {
    nome,
    classe,
    nivel,
    rank
} 