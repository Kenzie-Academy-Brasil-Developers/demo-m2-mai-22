import { Api } from "./api.js"
import { Vitrine } from "./vitrine.js"

const dataAccount = {
    name: "Lennon",
    email: "lennon2@gmail.com.br",
    password: "12345"
}

const containerUl = document.querySelector('.container')

const dataBaseBooks = await Api.getterBooks()

Vitrine.renderVitrine(dataBaseBooks, containerUl)

//--------

const returnApiAccount = await Api.createAccount(dataAccount)

console.log(returnApiAccount)