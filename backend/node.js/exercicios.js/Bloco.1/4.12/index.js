const comando = process.argv[2];

console.log("Ação escolhida:", comando);

switch(comando){
    case 1:
        console.log("Atacando o inimigo!");
        break;
    case 2:
        console.log("Se preparando para defender!");
        break;
    case 3:
        console.log("Fugindo que nem um covarde!");
        break;
    case 4:
        console.log("Abrindo inventario...");
        break;
    default:
        console.log("Comando invalido!!!");
}