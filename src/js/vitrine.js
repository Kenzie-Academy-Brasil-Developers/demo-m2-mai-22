export class Vitrine{

    static renderVitrine(arrBooks, container){
        arrBooks.forEach(book => {
            const card = this.createCardBook(book)
            container.appendChild(card)
        })
    }

    static createCardBook({titulo, autor, descricao}){
        const bookContainer = document.createElement("li")
        const titlebook = document.createElement('h2')
        const autorBook = document.createElement('h3')
        const descriptionBook = document.createElement('p')

        titlebook.innerText = titulo
        autorBook.innerText = autor
        descriptionBook.innerText = descricao

        bookContainer.append(titlebook, autorBook, descriptionBook)

        return bookContainer
        
    }

} 