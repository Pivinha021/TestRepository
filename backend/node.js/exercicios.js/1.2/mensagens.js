function boasVindas(nome){
    return `Olá ${nome}, tudo bem ? seja muito bem vindo ao sistema, e então ${nome}... Pronto para começar ? `
}
function despedida(nome){
    return `O que ? você já vai ir embora ? que pena... mas tudo bem, volte sempre!!!`
}
const autorSistema = "lucas";

module.exports = {
    boasVindas,
    despedida,
    autorSistema
}