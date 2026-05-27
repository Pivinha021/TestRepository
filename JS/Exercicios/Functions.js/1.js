// Code:

function saudacao(nome) 
{
    return `Olá ${nome} seja bem vindo`;
};

function ehpositivo(number) 
{
    if(number >= 0)
    {
        return true;
    }
    else return false;
};

function calcularArea(largura, altura)
{
    return largura * altura;
};

console.log(saudacao("lucas"));
console.log(ehpositivo(2));
console.log(ehpositivo(-1));
console.log(calcularArea(12, 6));

// saida:

// Olá lucas seja bem vindo
// true
// false
// 72