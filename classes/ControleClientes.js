//cadastrar/atualizar/deletar clientes das academias
class ControleClientes {
    static cadastrarCliente(academia, clienteNovo) {
        let clienteExiste = academia.clientes.find(({email}) => {
            return email === clienteNovo.email
        })

        if (clienteExiste !== undefined /* ou clienteExiste */) {
            return "Cliente já cadastrado"
        }

        academia.clientes.push(clienteNovo)
        return "Cliente cadastrado com sucesso!"

    } 

    static atualizarCliente(academia, clienteParaAtualizar, novoEmail) { // método atualiza apenas o email
        let clienteExiste = academia.clientes.find((cliente) => {
            return cliente.email === clienteParaAtualizar.email
        })

        if (clienteExiste === undefined /* ou !clienteExiste */) {
            return "Cliente não consta no cadastro"
        }

        clienteExiste.email = novoEmail

        return "Cliente atualizado com sucesso"
    }

    static deletarCliente(academia, clienteParaDeletar) {
        let clienteExiste = academia.clientes.find((cliente) => {
            return cliente.email === clienteParaDeletar.email
        })

        if (clienteExiste === undefined /* ou !clienteExiste */) {
            return "Cliente não consta no cadastro"
        }

        //verificar o index daquele cliente no array academia.clientes
        let index = academia.clientes.indexOf(clienteExiste)
        academia.clientes.splice(index, 1)

        return "Cliente deletado com sucesso"
        
    }
}