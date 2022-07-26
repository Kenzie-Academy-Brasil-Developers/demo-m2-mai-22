function criarCards(titulo, descricao) {
    const main = document.querySelector("main");

    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = criarCardHeader(titulo);
    const cardBody = criarCardBody(descricao);

    card.append(cardHeader, cardBody);
    main.append(card);
}

function criarCardHeader(titulo) {
    const cardHeader = document.createElement("div");
    const p = document.createElement("p");
    cardHeader.classList.add("card__header");
    p.innerText = titulo;
    
    cardHeader.append(p);

    return cardHeader
}

function criarCardBody(descricao) {
    const cardBody = document.createElement("div");
    const img = document.createElement("img");
    const bodyP = document.createElement("p");
    
    cardBody.classList.add("card__body");
    img.src = "./../assets/example-image.jpg"
    bodyP.innerText = descricao
    
    cardBody.append(img, bodyP);

    return cardBody
}

criarCards("Churros", "Textinho bonito");
criarCards("Jardel", "I.A");
