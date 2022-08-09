// //escopo de variável



// // alert("Meu alerta")

// var nome = "Bruno";

// outroNome = "Bruf";

// // console.log(window)

// //hoisting -> içamento, elevação

// // console.log(teste);

// // let teste = "Meu texto de exemplo"

// function  contarIdade() {
//     for (let idade = 20; idade <= 30; idade++) {
//         console.log("Minha idade dentro do for", idade)
//     }
//     console.log("Fora do for", idade)
// }

// contarIdade()

//const é igual ao let "NA QUESTÃO DE ESCOPO"

//const NÃO MUDA 

// const idade = "Secreta";
// const array = [10, 20, 30, 40, 50];

// array[0] = 34

// console.log(array);

// const pessoa = {
//     nome: "Bruf",
//     cidade: "Curitiba"
// }

// const outraPessoa = {
//     nome: "Ramon",
//     cidade: "Manaus"
// }

// pessoa.nome = outraPessoa.nome;

// console.log(pessoa)

//constante pode mudar "valor" QUANDO ARRAY OU OBJETO, MAS SOMENTE SUAS POSIÇÕES OU CHAVES
//constante NÃO MUDA ENDEREÇO

// objeto this
//uma variável onde o seu valor referencia o seu contexto

// console.log(this)
// console.log(this === window)

//função ES5
// function meuThis() {
//     console.log("Função ES5", this)
// }

// meuThis()

// //arrow function

// const meuThis2 = () => {
//     console.log("Função arrow", this)
// }

// meuThis2()


// const pessoa = {
//     nome: "Bruno",
//     cidade: "Curitiba",
//     trabalho: "Kenzie",
//     apresentacao() {
//         console.log(`${this.nome} está em ${this.cidade} trabalhando na ${this.trabalho}`)
//     },
//     outraApresentacao: () => {
//         console.log(`${this.nome} está em ${this.cidade} trabalhando na ${this.trabalho}`)
//     }
// }

// pessoa.outraApresentacao()

// const form = document.querySelector("#my-form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(e.target.login);
// });

// programação orientada a objetos

class Pessoa {
    constructor(nome, sobrenome, cidade) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._cidade = cidade
    }
    apresentar() {
        const { _nome, _sobrenome, _cidade } = this;
        return `Eu sou ${_nome} ${_sobrenome} e moro em ${_cidade}`;
    }
}

const arrayPessoas = [
    {
        nome: "Bruno",
        cidade: "Curitiba"
    },
    {
        nome: "João",
        cidade: "Belo Horizonte"
    },
    {
        nome: "Lennon",
        cidade: "Maringá"
    }
]

// arrayPessoas.forEach((pessoa) => {
//     const novaPessoa = new Pessoa(pessoa.nome, "Silva", pessoa.cidade)
//     console.log(novaPessoa)
// })

class Trabalhador extends Pessoa {
    constructor(nome, sobrenome, cidade, obrigacao) {
        super(nome, sobrenome, cidade)
        this._obrigacao = obrigacao;
    }
    apresentar() {
        const { _nome, _sobrenome, _cidade, _obrigacao } = this;
        return `Eu sou ${_nome} ${_sobrenome}, moro em ${_cidade} e atuo como ${_obrigacao}`;
    }
}

const pai = new Trabalhador("Thomas", "Mello", "Santa Maria", "desenvolvedor");

// console.log(pai.apresentar());

const teste = new Array();

console.log(teste)