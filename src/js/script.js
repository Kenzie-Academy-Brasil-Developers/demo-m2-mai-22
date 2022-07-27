/**
 * Métodos de String
 *      includes => Retorna true ou false se uma String possui a substring selecionada
 *      indexOf => Retorna a posição que se encontra uma substring dentro de uma string
 *      replace / replaceAll => Substitui na sua string principal, uma substring por outra substring
 *      split => Cortar uma string em toda ocorrencia de uma substring selecionada. Retorna um array com os valores separados
 *      slice => Cortar uma fatia de uma string, baseada nas index passadas
 *      trim / trimStart / trimEnd => Remover espaços no fim e no inicio da string
 */

function iterarSobreArray(modulo, substring) {
    for (let contador = 0; contador < data.length; contador++) {
        const funcionario = data[contador];

        // let resultado = funcionariosPorModulo(funcionario, modulo)
        // let resultado = ondeSeEncontraModulo(funcionario,modulo)
        // let resultado = trocarPontoVirgula(funcionario, substring)
        // let resultado = separarPorPontoVirgula(funcionario)
        // let resultado = cortarAtéIndex10(funcionario)
        // let resultado = removerEspacos(funcionario)
        console.log(resultado)
    }
}

function funcionariosPorModulo(funcionario, modulo) {
    return funcionario.includes(modulo)
}

function ondeSeEncontraModulo(funcionario, modulo) {
    return funcionario.indexOf(modulo);
}

function trocarPontoVirgula(funcionario, substring) {
    // return funcionario.replace(";", substring)
    return funcionario.replaceAll(";", substring)
}

function separarPorPontoVirgula(funcionario) {
    return funcionario.split(";", 2)
}

function cortarAtéIndex10(funcionario) {
    return funcionario.slice(0,10)
}

function removerEspacos(funcionario) {
    // return funcionario.trim()
    // return funcionario.trimStart()
    return funcionario.trimEnd()
}

iterarSobreArray("M1", ",");
