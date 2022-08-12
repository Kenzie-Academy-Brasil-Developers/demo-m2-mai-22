class Cliente extends Pessoa {
    constructor(nome, idade, peso, email) {
        super(nome, idade)
        this.peso = peso
        this.email = email
    }
}