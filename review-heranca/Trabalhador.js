class Trabalhador extends Estudante {
    constructor(nome, cpf, altura, peso, curso, periodo, cargo, salario) {
        super(nome, cpf, altura, peso, curso, periodo)
        this.cargo = cargo
        this.salario = salario
        this.atrasado = false
    }

    saudacao() {
        return `Oi, meu nome é ${this.nome} e sou ${this.cargo}`
    }

}

const lennon = new Trabalhador("Lennon", "789.123.45", 1.8, 75, "Engenheiro", "Integral", "Instrutor", 500)

// console.log(lennon.atividadeExtra())


