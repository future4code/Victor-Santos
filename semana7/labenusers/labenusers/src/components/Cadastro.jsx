import React from 'react'
import axios from 'axios' //Passo 4.4: Importar o axios.
import styled from 'styled-components'
import App from '../App'


// const BotaoRemove = styled.span`
//     cursor: pointer
// `


export class Cadastro extends React.Component {
    state = {
        // Passo 3.2: Crio um state com as propriedades nome e email vazias para que elas possam receber esse valor através dos inputs.
        nome: "",
        email: "",
    }
    
    // Passo 3.3: Crio funções para alterar os valores de nome e email no estado recebendo esse valor através dos inputs controlados.
    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    // Passo 4.2: Crio uma função para fazer o cadastro do usuário.
    registerUser = () => {
        // Passo 4.5: Nós vamos fazer a função de registrar usuários através do uso de APIs, ou sejam através de REQUISIÇÕES.
        // Para isso vamos utilizar o método post. (necessário: URL, body e headers).
        // Estou fazendo um cadastro de usuário na lib.
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {name: this.state.nome, email: this.state.email} // Passo os valores das propriedades no body para cadastrar.
        const headers = {headers: { Authorization: 'victor-nogueira-lovelace'}}
        // Sintaxe:
        axios.post(url, body, headers)
        // Agora preciso dizer o que ela faz em caso de sucesso (.then()) ou em caso de fracasso (.catch()).
        .then((response) => { // No caso de sucesso eu quero mostrar a resposta ao usuário. (Não preciso de uma resposta direta da lib pois não estou solicitando alguma informação, apenas cadastrando. Posso retornar uma mensagem direta ao usuário informado que o cadastro foi realizado com sucesso.)
            console.log(response)
            alert("Cadastro realizado com sucesso!")
            //Passo 4.6: Apagar meu input para que possa ser realizado outro cadastro ou outra ação pelo usuário.
            this.setState({nome: "", email: ""})
        }).catch((error) => { // No caso de erro eu quero mostrar a mensagem de erro ao usuário. (Para verificar o conteéudo do erro eu solicito através do erros.response.data)
            alert(error.response.data.message)
            console.log(error.response.data)
        })
    }

    // addUser = () => {
        
    //     const newUsers = [
    //         ...this.state.listaDeUsuarios,
    //         {
    //             nome: this.state.nome,
    //             email: this.state.email,
    //         }
    //     ]

    //     this.setState({listaDeUsuarios: newUsers, nome: "", email: ""})
    //     alert("Usuário criado com sucesso!")
    // }

    // removeUser = (nameToRemove) => {
    //     const newUsers = [...this.state.listaDeUsuarios].filter((listaDeUsuarios) => {
    //         return listaDeUsuarios.nome !== nameToRemove
    //     })
    //     this.setState({listaDeUsuarios: newUsers})
    //     alert("Usuário removido!")
    // }



    render() {
    //     const listaUsers = this.state.listaDeUsuarios.map((user, index) => {
    //     return (
    //       <li key={index}>
    //         <span>Nome: {user.nome}       E-mail: {user.email}          </span> 
    //         <span>
    //         <button onClick={() => this.removeUser(user.nome)}>Excluir</button>
    //         </span>
    //       </li>
    //     );
    // }); // prettier-ignore

        return (
            <div>
                
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                

                <h1>Tela de Cadastro</h1>
                {/* Passo 3.1: Crio um input solicitando o nome (ele será controlado pois dependo de uma informação do usuários) */}
                <div>
                    <label htmlFor="">Nome:</label>
                    <input 
                        type="text" 
                        placeholder={"Nome"}
                        value={this.state.nome} // Passo 3.4: Defino um value (com o valor da propriedade) e um onChange (com o valor da função de alterar o valor) para que meu formulário possa ser preenchido.
                        onChange={this.onChangeNome}
                    />
                </div>

                {/* Passo 3.1: Crio outro input solicitando o e-mail (ele será controlado pois dependo de uma informação do usuário) */}
                <div>
                    <label htmlFor="">E-mail:</label>
                    <input 
                        type="text"
                        placeholder={"E-mail"}
                        value={this.state.email} // Passo 3.4: Defino um value (com o valor da propriedade) e um onChange (com o valor da função de alterar o valor) para que meu formulário possa ser preenchido.
                        onChange={this.onChangeEmail}
                    />
                </div>
                
                {/* Passo 4.1: Crio um botão para cadastrar o usuário (salvar nome e e-mail) */}
                <div>
                    <button onClick={this.registerUser}>Salvar</button> {/* Passo 4.3: adiciono o onClick com a função de cadastrar usuário. */}
                </div>

                <hr />

                {/* {listaUsers} */}
            
            </div>
        ); // prettier-ignore
    }
}