/*cnst books =   fetch("https://api-kenzie-livros.herokuapp.com/auth/register", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(
                        {name: "Jardel"}
                        )
                })
                .then(resp => resp.json())
                .then(resp => {
                    liberaAcesso()
                    return resp
                })
                .catch(err => console.log(err))

console.log(sadasd)
console.log(asdasd)

ACIONA A API

console.log(books)

*/

const BASEURL = "https://api-kenzie-livros.herokuapp.com/"


async function createUser(){
    const data = await fetch(`${BASEURL}auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "jardel",
            email: "bertoldGmail@gmail.com",
            password: "12345"
        })
    })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.log(err))

    return data
}


const user = await createUser()

console.log(user)

console.log("2222222222222")
