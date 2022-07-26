const main = document.querySelector("main");

const card = document.createElement("div");
card.classList.add("card");


/**
 * Criar Header do Card
 */
const cardHeader = document.createElement("div");
const p = document.createElement("p");
cardHeader.classList.add("card__header");
p.innerText = "Produto de Teste";

cardHeader.append(p);


/**
 * Criar Body do Card
 */
const cardBody = document.createElement("div");
const img = document.createElement("img");
const bodyP = document.createElement("p");

cardBody.classList.add("card__body");
img.src = "./../assets/example-image.jpg"
bodyP.innerText = "Texto de Teste"

cardBody.append(img, bodyP);

card.append(cardHeader, cardBody)
main.append(card);