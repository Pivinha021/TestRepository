const calculadora = require("./operacoes");

const numero1 = process.argv[2];
const numero2 = process.argv[3];

console.log(calculadora.somar       (numero1, numero2));
console.log(calculadora.subtrair    (numero1, numero2));
console.log(calculadora.multiplicar (numero1, numero2));
console.log(calculadora.dividir     (numero1, numero2));

