class Pessoa {
  constructor(nome) {
    this.nome = nome
    this.compras = []
  }
}

//classe base
class Comercio {
  static tipoDeComercio = "Comércio Genérico"

  constructor(nome) {
    this.nome = nome
  }

  static comprarProduto(comercio, pessoa, nomeDoProduto) {
    //procurar o produto no array de produtos do comercio
    const procurarProduto = comercio.produtos.find(({nome})=> {
      return nome === nomeDoProduto
    })

    // if(procurarProduto === undefined || procurarProduto.estoque === 0) {
    //   return "produto indisponível"
    // }

    if (!procurarProduto || !procurarProduto.estoque){
      return "produto indisponível"
    }

    // desconstrução
    let { nome, preco } = procurarProduto;

    let localCompra = comercio.constructor.name

    pessoa.compras.push({nome, preco, localCompra})

    procurarProduto.estoque -= 1

    return "produto comprado"
  }
}

//classe derivada ou filha
class Mercado extends Comercio {
  static tipoDeComercio = "Mercado"

  constructor(nome) {
    super(nome)
    this.produtos = [
      {
        nome: "refrigerante",
        preco: 5.0,
        estoque: 10,
      },
      {
        nome: "salgadinho",
        preco: 10,
        estoque: 10,
      },
    ]
  }
}

//classe derivada ou filha
class Farmacia extends Comercio {
  static tipoDeComercio = "Farmacêutico"

  constructor(nome) {
    super(nome)
    this.produtos = [
      {
        nome: "remedio x",
        preco: 5,
        estoque: 25,
      },
      {
        nome: "remedio y",
        preco: 2.5,
        estoque: 25,
      },
    ]
  }
}

// testes

const comercinho = new Comercio("Comercinho")

console.log(comercinho.tipoDeComercio)
console.log(Comercio.tipoDeComercio)

const mercadinho = new Mercado("Mercadinho")

//console.log(Mercado.tipoDeComercio)

const farmacinha = new Farmacia("Farmacinha")

const kenzinho =  new Pessoa("Kenzinho")

// console.log(Comercio.comprarProduto(mercadinho, kenzinho, "refrigerante"))

// console.log(Comercio.comprarProduto(mercadinho, kenzinho, "chocolate"))

Comercio.comprarProduto(farmacinha, kenzinho, "remedio x")

// console.log(kenzinho.compras)

