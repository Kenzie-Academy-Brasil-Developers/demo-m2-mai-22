/**
 * Métodos de Array
 *      JOIN => Combina um array, transformando em uma string separada pelo "separador" escolhido
 *      FOREACH => Executa uma função PARA CADA item do Array selecionado
 *      MAP => Executa uma função PARA CADA iem do array, criando um novo array baseado no retorno da função de callback
 *      FILTER & FIND => Executa uma função para filtrar um ou vários itens. Gera um novo array baseado na função de callback
 *      EVERY & SOME => Executa uma função de validação e retorna true se existem um ou mais itens que passem na condição.
 *      REDUCE => Reduz um array para um único valor
 *      SORT
 */
function explicandoJoin() {
    const meuConjuntoDados = [
        "Victor Augusto",
        18,
        "Churros"
    ]
    
    return meuConjuntoDados.join("")
}

// console.log(explicandoJoin());


/**
 * FOREACH
 */
function testarForEach() {
    data.forEach(function(elem, index, array) {
        // criarCard(elem.nome, elem.preco)
        console.log(`${elem.nome} custa ${elem.preco}`)
    })

}


// data.forEach(minhaFuncao)

// function minhaFuncao() {

// }


// testarForEach();

/**
 * MAP
 */
function testarMap() {
    const nomesProdutos = data.map(function(elem, index, array) {
        return `${elem.nome} custa ${elem.preco}`
    })    

    console.log(nomesProdutos)
}

// testarMap();

/**
 * FILTER / FIND
 */
//Pega todos os item que passe a condição
function testarFilter() {
    return data.filter((elem, index, array) => {
        return elem.preco > 80
    })

    // return data.filter(elem => elem.preco > 80)
}

//Pega o primeiro item que passe a condição
function testarFind() {
    return data.find((elem, index, array) => {
        return elem.preco > 80
    })
}

// console.log(testarFilter());
// console.log(testarFind());


/**
 * EVERY / SOME
 */
//Todos devem passar a condição
function testarEvery() {
    const resultadoEvery = data.every((elem, index, array) => {
        return elem.preco > 30
    })

    // const resultadoEvery = data.every(elem => elem.preco > 30);

    console.log(resultadoEvery)
}

//Ao menos um deve passar a condição
function testarSome() {
    const resultadoSome = data.some((elem, index, array) => {
        return elem.categoria === "Cosmético"
    })

    console.log(resultadoSome)
}

// testarEvery();
// testarSome();


function testarExemplo1Reduce() {
    const meuConjuntoValores = [
        5,
        10,
        20,
        30
    ]
    
    const resultadoReduce = meuConjuntoValores.reduce((valorAnterior, valorAtual) => {
        return valorAnterior + valorAtual
    })

    console.log(resultadoReduce)
}

// testarExemplo1Reduce();


function testarExemplo2Reduce() {
    // const resultadoReduce = data.reduce((valorAnterior, valorAtual) => {
    //     valorAnterior.valorTotal = valorAnterior.valorTotal + valorAtual.preco

    //     return valorAnterior

    // }, { valorTotal: 0 })

    // const resultadoReduce = data.reduce((valorAnterior, valorAtual) => {
    //     return valorAnterior + valorAtual.preco
    // }, 0)


    
    const resultadoReduce = data.reduce((valorAnterior, valorAtual) => {
        const soma = {
            preco: 0
        }

        soma.preco = valorAnterior.preco + valorAtual.preco

        return soma;

    })

    console.log(resultadoReduce)
}

// testarExemplo2Reduce();


function testarSort() {
    // const conjuntoDados = ["Victor", 10, "Augusto", 18]
    // const arrayOrganizado = conjuntoDados.sort();
    // console.log(arrayOrganizado)

    // const arrayOrganizado = data.sort((a, b) => {
    //     // return a.id - b.id
    //     return b.id - a.id
    // });

    const arrayOrganizado = data.sort((a, b) => {
        const categoriaA = a.categoria.toUpperCase();
        const categoriaB = b.categoria.toUpperCase();

        if (categoriaA > categoriaB) {
            return -1
        } else if (categoriaA < categoriaB) {
            return 1
        } else {
            return 0
        }
    })

    console.log(arrayOrganizado)
}

testarSort();








