// Code:

const saudacao = (nome) => `Olá ${nome} seja bem vindo`;

const ehpositivo = (number) => (number >= 0 ? true : false);

const calcularArea = (largura, altura) => largura * altura;

console.log(saudacao("lucas"));
console.log(ehpositivo(2));
console.log(ehpositivo(-1));
console.log(calcularArea(12, 6));

// saida:

// Olá lucas seja bem vindo
// true
// false
// 72