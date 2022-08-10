class Pessoa {
    constructor(nome, cpf, altura, peso) {
        this._nome = nome
        this.cpf = cpf
        this.altura = altura
        this.peso = peso
    }

    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome=novoNome
    } 

    imc() {
        // peso / (altura * altura)
        let indice = (this.peso / (this.altura * this.altura)).toFixed(1)
        let resultado = 'indefinido'

        // indice < 18.5 => Abaixo do peso
        // indice > 18.5 && indice  < 24.9 => peso normal
        // indice > 25  && indice < 29.9 => sobrepeso
        // indice > 30 && indice < 34.9 => obesidade grau 1
        // indice > 35 && indice < 39.9 => obesidade grau 2
        // indice > 40 => obesidade grau 3 
        if (indice < 18.5) {
            resultado = 'Abaixo do peso';
        } else if (indice >= 18.5 && indice <= 24.9) {
            resultado = 'Peso normal';
        } else if (indice >= 25 && indice <= 29.9) {
            resultado = 'Sobrepeso';
        } else if (indice >= 30 && indice <= 34.9) {
            resultado = 'Obesidade grau 1';
        } else if (indice >= 35 && indice <= 39.9) {
            resultado = 'Obesidade grau 2';
        } else if (indice >= 40) {
            resultado = 'Obesidade grau 3';
        }

        return `${resultado}, seu índice é de ${indice}`
    } 
    saudacao() {
        return `Oi, meu nome é ${this.nome}`
    }
}

const jardel = new Pessoa("Francisco Jardel", "111.222.333-00", 1.70, 70)
// console.log(jardel.imc())


