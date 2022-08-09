// Uma classe é uma abstração de um ou mais objetos do mundo real,
// uma classe é uma molde  que nós programadores utilizamos para 
// instanciar objetos
// nossa classe que a abstração de um objeto do mundo real
//*
class NomedaClasse {
    // é um método do tipo especial utilizado para receber os parâmetros da classe
    // em questão
    constructor(parametro1, parametro2) {
    }
}
//*/
/****************************************************/
class Pessoa {
    constructor(nome, sobrenome, cpf) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._cpf = cpf;
    }
    // obter o nome
    get mostrarNome() {
        return this._nome;
    }
    // atribuição de valores (novo valor / atualizar valor)
    set atribuirNome(texto) {
        this._nome = texto;
    }
    // obter o sobrenome
    get mostrarSobrenome() {
        return this._sobrenome;
    }
    // atribuição de valores (novo valor / atualizar valor)
    set atribuirSobrenome(texto) {
        this._sobrenome = texto;
    }
    // obter o CPF
    get mostrarCPF() {
        return this._cpf;
    }
    // atribuição de valores (novo valor / atualizar valor)
    set atribuirCPF(texto) {
        this._cpf = texto;
    }
}
// atribuição de valores ao instanciar a classe (objeto)
const individuo = new Pessoa('Marcelo', 'Silva', '333.666.555-01');
// leitura dos dados pelo contexto interno
console.log(`Leitura interna: ${individuo._nome} ${individuo._sobrenome}: ${individuo._cpf}`);
// leitura dos dados pelo contexto externo
console.log(`Leitura externa: ${individuo.mostrarNome} ${individuo.mostrarSobrenome}: ${individuo.mostrarCPF}`);
// atribuição de valores por um contexto externo (métodos)
// const individuo = new Pessoa();
individuo.atribuirNome = 'Lennon';
individuo.atribuirSobrenome = 'Cécere';
individuo.atribuirCPF = '333.555.666-01';
console.log('\n');
console.log(`CPF antes de alterar: ${individuo.mostrarCPF}`);
// atualizar cpf
individuo.atribuirCPF = '999.999.999-99';
console.log(`CPF Alterado: ${individuo.mostrarCPF}`);
