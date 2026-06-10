const destaque = document.querySelector("#caixa");
const oculto = document.querySelector("#alerta");
const erro = document.querySelector("#card");

destaque.classList.add('destaque');
oculto.classList.add('oculto');
erro.classList.add('erro');

console.log("destaque tem class: 'destaque'?");
console.log(destaque.classList.contains('destaque'));
console.log("destaque tem class: 'oculto'?");
console.log(destaque.classList.contains('oculto'));
console.log("destaque tem class: 'erro'?");
console.log(destaque.classList.contains('erro'));
console.log("oculto tem class: 'destaque'?");
console.log(oculto.classList.contains('destaque'));
console.log("oculto tem class: 'oculto'?");
console.log(oculto.classList.contains('oculto'));
console.log("oculto tem class: 'erro'?");
console.log(oculto.classList.contains('erro'));
console.log("erro tem class: 'destaque'?");
console.log(erro.classList.contains('destaque'));
console.log("erro tem class: 'oculto'?");
console.log(erro.classList.contains('oculto'));
console.log("erro tem class: 'erro'?");
console.log(erro.classList.contains('erro'));

