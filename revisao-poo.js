// This

var mensagem = "Não usem var!!"

function teste() {
    console.log(this.mensagem)
}

// teste()

let objetinho = {mensagem: "Quero cafézin", teste: teste}

// console.log(objetinho.teste())

// Classe

/*
Colinha

se o método é estático, eu chamo assim => nome-da-classe.nome-do-metodo

se o método não é estático, eu chamo assim => objeto-instanciado.nome-do-metodo

*/


// testes
const maria = new Cliente("Maria", 29, 55, "maria@mail.com")
const rafaB = new Cliente("RafaB", 30, 75, "rafab@mail.com")
const nicole = new Cliente("Nicole", 29, 50, "nicole@mail.com")
const jardel = new Cliente("Jardel", 60, 70, "jardel@mail.com")

const academia = new Academia("NoPain NoGain")

ControleClientes.cadastrarCliente(academia, maria)
ControleClientes.cadastrarCliente(academia,rafaB)
ControleClientes.cadastrarCliente(academia,nicole)
ControleClientes.cadastrarCliente(academia,jardel)

console.log(academia.clientes)

ControleClientes.atualizarCliente(academia, rafaB, "touquinhaDeBichinho@mail.com")

console.log(academia.clientes)

console.log(ControleClientes.deletarCliente(academia, maria))

console.log(academia.clientes)

console.log(jardel.saudacao())

// tipo de dado booleano 
// true(1) ou ele é false(0)