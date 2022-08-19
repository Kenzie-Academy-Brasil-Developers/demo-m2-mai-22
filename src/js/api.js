export class Api{
    static urlBase = "https://api-kenzie-livros.herokuapp.com/"

    static async getterBooks(){
        const data = await fetch(`${this.urlBase}livros`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(resp => resp.json())
                    .then(resp => resp)
                    .catch(err => console.log(err))

        return data
    }

    static async createAccount(body){
        const data = await fetch(`${this.urlBase}auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })

        const account = await data.json()

        return account
    }

}