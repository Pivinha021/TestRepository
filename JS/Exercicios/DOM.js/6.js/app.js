const itens = document.querySelectorAll(".item");

itens.forEach((itens, item) => {
    console.log(`[${item + 1}]-[${itens.textContent}]`);
});

itens[2].classList.add("destaque");