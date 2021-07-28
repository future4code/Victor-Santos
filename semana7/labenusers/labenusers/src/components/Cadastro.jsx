import React from 'react'
import axios from 'axios'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    Authorization: "victor-nogueira-lovelace"
}


export class Cadastro extends React.Component {
    state = {
        users: [],

    }



    
    // axios.post(url, body, Headers)
    // .then((response) => {

    // })
    // .catch((error) => {
    // }

    pegarUsers = () => {
        axios
            .get(url, headers)
            .then((response) => {
                alert("Parabéns, você criou um usuário!")
            })
            .catch((error) => {
                alert(error.response)
            })
    }





    render() {
        return (
            <div>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text"
                    placeholder="Digite seu nome"
                    />
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    />
                </div>

                <div>
                    <button>Salvar</button>
                    
                  
                </div>
                
            
            </div>
        )
    }
}