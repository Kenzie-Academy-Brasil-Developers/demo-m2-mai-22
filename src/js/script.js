const victor = {
    nome: "Victor Augusto",
    idade: 18,
    hobbies: [
        {nome: "RPG", dias: "sabado"},
        {nome: "Vôlei", dias: "quarta"},
        {nome: "Japônes", dias: "segunda"},
    ]
}

// const chave = "hobbies"
// console.log(victor[chave]);

// victor.hobbies.forEach((elem, index, array) => {
//     console.log({
//         elem, index
//     })
// })

// console.log(victor.hobbies[1].dias)

function removerObjetosDuplicados() {

    const resultado = data.filter((elem, index, arr) => {
        const indice = arr.findIndex((innerElem, innerIndex) => {
            const validacaoId = elem.id === innerElem.id
            const validacaoNome = elem.nome === innerElem.nome
            const validacaoCategoria = elem.categoria === innerElem.categoria
            const validacaoPreco = elem.preco === innerElem.preco

            return validacaoId && validacaoNome && validacaoCategoria && validacaoPreco
        })

        return indice === index
    })

    return resultado;
}
console.log(removerObjetosDuplicados());



// data.forEach((elem, index, arr) => {
//     const novoPreco = elem.preco * 2;
//     debugger;

    
// })