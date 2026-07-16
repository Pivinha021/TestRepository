function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if(a === 0){
        return 0;
    }
    else return a / b;
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}