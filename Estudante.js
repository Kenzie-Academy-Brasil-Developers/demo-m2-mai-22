class Estudante extends Pessoa {
    constructor(nome, cpf, altura, peso, curso, periodo) {
        super(nome, cpf, altura, peso)
        this.curso = curso
        this.periodo = periodo
        this.atrasado = true
    }

    atividadeExtra() {
        if(this.atrasado) {
            return this.recuperacao()
        }

        return `${this.nome} passou de Módulo`
    }

    recuperacao() {
        return `O ${this.nome} vai precisar fazer uma atividade extra para recuperar-se no curso de ${this.curso}`;
    }
}

const nicole = new Estudante("Nicole", "147.258.369-00", 1.6, 50, "Full Stack", "Integral")

