const nivel = process.argv[2];

if(nivel >= 1 && nivel <= 10) {
    console.log("Iniciante");
}
else if(nivel >= 11 && nivel <= 30) {
    console.log("Intermediário");
}
else if(nivel >= 31) {
    console.log("Veterano");
}
else{
    console.log("ERRO!!");
}