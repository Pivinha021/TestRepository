const personagens = [
    { nome: "Aragorn", classe: "Guerreiro", nivel: 15 },
    { nome: "Gandalf", classe: "Mago",      nivel: 20 },
    { nome: "Legolas", classe: "Arqueiro",  nivel: 12 },
    { nome: "Gimli",   classe: "Bárbaro",   nivel: 10 }
  ];

const container = document.querySelector("#container");

const personagem1 = personagens[0];
const card1 = document.createElement("div");
const ulCard1 = document.createElement("ul");
const li1Card1 = document.createElement("li");
const li2Card1 = document.createElement("li");
const li3Card1 = document.createElement("li");
const li4Card1 = document.createElement("li");

container.appendChild(card1);
card1.appendChild(ulCard1);
ulCard1.appendChild(li1Card1);
ulCard1.appendChild(li2Card1);
ulCard1.appendChild(li3Card1);
ulCard1.appendChild(li4Card1);

li1Card1.textContent = `nome: ${personagem1.nome}`;
li2Card1.textContent = `nome: ${personagem1.classe}`;
li3Card1.textContent = `nome: ${personagem1.nivel}`;
li4Card1.textContent = `nome: ${personagem1.nivel * 10}`;

const personagem2 = personagens[1];
const card2 = document.createElement("div");
const ulCard2 = document.createElement("ul");
const li1Card2 = document.createElement("li");
const li2Card2 = document.createElement("li");
const li3Card2 = document.createElement("li");
const li4Card2 = document.createElement("li");

container.appendChild(card2);
card2.appendChild(ulCard2);
ulCard2.appendChild(li1Card2);
ulCard2.appendChild(li2Card2);
ulCard2.appendChild(li3Card2);
ulCard2.appendChild(li4Card2);

li1Card2.textContent = `nome: ${personagem2.nome}`;
li2Card2.textContent = `nome: ${personagem2.classe}`;
li3Card2.textContent = `nome: ${personagem2.nivel}`;
li4Card2.textContent = `nome: ${personagem2.nivel * 10}`;

const personagem3 = personagens[2];
const card3 = document.createElement("div");
const ulCard3 = document.createElement("ul");
const li1Card3 = document.createElement("li");
const li2Card3 = document.createElement("li");
const li3Card3 = document.createElement("li");
const li4Card3 = document.createElement("li");

container.appendChild(card3);
card3.appendChild(ulCard3);
ulCard3.appendChild(li1Card3);
ulCard3.appendChild(li2Card3);
ulCard3.appendChild(li3Card3);
ulCard3.appendChild(li4Card3);

li1Card3.textContent = `nome: ${personagem3.nome}`;
li2Card3.textContent = `nome: ${personagem3.classe}`;
li3Card3.textContent = `nome: ${personagem3.nivel}`;
li4Card3.textContent = `nome: ${personagem3.nivel * 10}`;

const personagem4 = personagens[3];
const card4 = document.createElement("div");
const ulCard4 = document.createElement("ul");
const li1Card4 = document.createElement("li");
const li2Card4 = document.createElement("li");
const li3Card4 = document.createElement("li");
const li4Card4 = document.createElement("li");

container.appendChild(card4);
card4.appendChild(ulCard4);
ulCard4.appendChild(li1Card4);
ulCard4.appendChild(li2Card4);
ulCard4.appendChild(li3Card4);
ulCard4.appendChild(li4Card4);

li1Card4.textContent = `nome: ${personagem4.nome}`;
li2Card4.textContent = `nome: ${personagem4.classe}`;
li3Card4.textContent = `nome: ${personagem4.nivel}`;
li4Card4.textContent = `nome: ${personagem4.nivel * 10}`;

card1.style.backgroundColor = 'orange';
card2.style.backgroundColor = 'blue';
card3.style.backgroundColor = 'green';
card4.style.backgroundColor = 'red';

card1.classList.add('card');
card2.classList.add('card');
card3.classList.add('card');
card4.classList.add('card');


