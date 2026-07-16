const usuarios = require("./utils/usuarios");

usuarios.listarUsuario("Adalbertino", 28);
usuarios.listarUsuario("Jucanalha", 49);
usuarios.listarUsuario("Petruquio", 25);

console.log(usuarios.listaUsuarios);

usuarios.buscaUsuario("Jucanalha");