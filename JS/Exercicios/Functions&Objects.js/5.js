// code:

function criarPersonagem(nome, classe, nivel) {
    const personagem = {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: nivel * 10,
        apresentar: function(){
            console.log(`| Personagem ${this.nome}: |`);
            console.log(`| Classe: ${this.classe} | Nivel: ${this.nivel} | HP: ${this.hp} |`);
        }
    }
    return personagem;
}

const Bartolomeu = criarPersonagem("Bartolomeu", "Bardo", 10);
const Karls = criarPersonagem("Karls", "Viking", 78);

Bartolomeu.apresentar();
Karls.apresentar();

// saída:

// | Personagem Bartolomeu: |
// | Classe: Bardo | Nivel: 10 | HP: 100 |
// | Personagem Karls: |
// | Classe: Viking | Nivel: 78 | HP: 780 |


