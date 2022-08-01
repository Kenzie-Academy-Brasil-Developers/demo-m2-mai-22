/**
 * Desconstrução
 */
function percorrerDatabase() {
    data.forEach((elem) => {
        // const id = elem.id;
        // const nome = elem.nome;
        // const categoria = elem.categoria;
        // const preco = elem.preco;

        const { id, nome, preco } = elem
    })
}

// percorrerDatabase();

function desconstruirDatabase() {
    const [ churros, , batata ] = data

    console.log(batata)
}

// desconstruirDatabase();

/**
 * Spread Operator => ...
 */

function explicandoSpreadArray() {

    const conjuntoValores = [10, 5, 20, 15, 13, 12]
    
    // console.log(Math.max(...conjuntoValores));
    
    const variavel = [...conjuntoValores, 100,220,300,400];
    // console.log(variavel)
    
    const maisUmConjuntoValores = [...variavel, ...conjuntoValores, 123456]
    // console.log(maisUmConjuntoValores)
}

function explicandoSpreadObjetos() {
    const veiculo = {
        placa: "XAS1651SA",
        cor: "Azul"
    }

    const moto = {
        ...veiculo,
        rodas: 2,
    }

    const multas = [
        100.00,
        200.00,
        300.00
    ]

    const carro = {
        ...veiculo,
        ...moto,
        portas: 4,
        rodas: 4,
        cor: "Prata",
        multas: [   
            ...multas
        ]
    }

    console.log(carro)
}

// explicandoSpreadObjetos();


/**
 * Métodos => Funções dentro de um objeto
 */
function explicandoMetodos() {
    const carro = {
        portas: 4,
        rodas: 4,
        placa: "FDAS1651A",
        buzinar: function(tipoBuzina) {
            return tipoBuzina
        },
        buzinasso: function(tipoBuzina) {
            for (let contador = 0;contador < 4; contador++) {
                console.log(carro.buzinar(tipoBuzina));
            }
        }
    }

    carro.buzinasso("BIBI");
}

explicandoMetodos();