const calculadora = require("./utils/operacoes");
const validar = require("./utils/validacoes");

const numero1 = Number(process.argv[2]);
const numero2 = Number(process.argv[3]);

console.log(calculadora.somar       (validar.validar(numero1), validar.validar(numero2)));
console.log(calculadora.subtrair    (validar.validar(numero1), validar.validar(numero2)));
console.log(calculadora.multiplicar (validar.validar(numero1), validar.validar(numero2)));
console.log(calculadora.dividir     (validar.validar(numero1), validar.validar(numero2)));

