// função para setar as informações no localStorage

function setColor() {
    localStorage.setItem('color1', 'blue');
    localStorage.setItem('color2', 'red');
    localStorage.setItem('color3', 'black');
    localStorage.setItem('color4', 'grey');
}

setColor();

// função para pegar as informações no localStorage

function useColor() {
    // Pegando a cor 1 e guardando na variável
    let color = localStorage.getItem('color1');
    // Mudando o backgroud do site https://api.nasa.gov/
    document.getElementById('authentication').style.backgroundColor = color;
}

useColor();

/* Obter todas as chaves do localStorage

Object.keys(localStorage)
localStorage tutorial:
como usar: localStorage.método

// métodos

getItem = pegar item
setItem = set/guardar item
length = obter quantidade de valores salvos
clear = limpar todo localStorage
key(posiçao do array) = obter um dado específico pela posição de armazenamento
removeItem(keyName) = obter um dado pelo nome da chave

*/
