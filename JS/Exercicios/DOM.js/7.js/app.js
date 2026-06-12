const img = document.querySelector("#foto");
const a = document.querySelector("#link");
const input = document.querySelector("#campo");

img.setAttribute("src", "./assets/img/gato.png");
a.setAttribute("href", "https://github.com");
input.setAttribute("disabled", "");

console.log(img.getAttribute("src"));
