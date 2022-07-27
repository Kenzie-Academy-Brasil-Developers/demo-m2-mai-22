function calcular(valor1, valor2, callbackFn) {
    const resultado = callbackFn(valor1, valor2);

    return resultado;
}

function somar(valor1, valor2) {
    return valor1 + valor2;
}

function subtrair(valor1, valor2) {
    return valor1 - valor2
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    return valor1 / valor2
}

console.log(calcular(15,10, somar));
console.log(calcular(15,10, subtrair))
console.log(calcular(15,10, multiplicar))
console.log(calcular(15,10, dividir))

// function teste(param1, param2) {
//     console.log({
//         param1,
//         param2
//     }) 
// }

// teste(() => {
//     console.log("Olá mundo")
// }, 15)

// teste(function() {
//     console.log("Olá mundo")
// }, 15)

// function mostrarEmTela() {
//     console.log("Olá mundo")
// }

// teste(mostrarEmTela, 15)