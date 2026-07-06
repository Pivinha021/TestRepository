const celsius = process.argv[2]; 

const operacoes = require("./operacoes");

console.log("---| converter temperatura |---");

console.log("Temperatura atual: [" + celsius + "]");

console.log("Celsius -> Fahrenheit:");
console.log("[" + operacoes.fahrenheit(celsius) + "]");

console.log("Celsius -> Kelvin:");
console.log("[" + operacoes.kelvin(celsius) + "]");