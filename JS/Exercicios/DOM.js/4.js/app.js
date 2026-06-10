const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");

console.log(nome.value);
console.log(idade.value);
console.log(curso.value);

console.log("Idade multiplicado por 2:");
console.log(Number(idade.value) * 2);

console.log(`Nome: ${nome.value} | idade: ${idade.value} | curso: ${curso.value}`);