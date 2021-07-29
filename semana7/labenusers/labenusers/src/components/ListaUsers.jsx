import React from 'react'
import axios from 'axios' // Passo 5.2: Importar o axios no meu component.
import styled from 'styled-components'
import App from '../App'


//Passo 5.5.3: Tranformando lista de dados em lista de components.
const UserCard = styled.li`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
`

export class ListaUsers extends React.Component {
    // Passo 5.5: Criar um estado para armazenar a resposta da minha requisição junto a lib, neste caso, a lista de usuários.
    state = {
        users: [], // Passo 5.5.1: Defino um array vazio para armaxenar os usuários.
    }

    //Passo 5.4: Definir o momento que eu quero chamar essa minha função de pegar a lista de usuários. (Pode ser: No momento da montagem do site (lifecycle), em alguma atualização (update), apertando algum botão, etc...)
    // Eu quero que minha lista de usuários apareça assim que eu entrar na tela de lista de usuários, portanto, eu defino essa aparição usando o lifecycle componentDidMount().
    componentDidMount() {
        this.getUsers()
    }


    // Passo 5.1: Criar a função de pegar usuários
    getUsers = () => {
        // Passo 5.3: Definir minha função de pegar as listas de usuários da lib.
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        // const headers = {headers: {Authorization: 'victor-nogueira-lovelace'}}
        // Sintaxe do get.
        axios.get(url, {headers: {Authorization: 'victor-nogueira-lovelace'}})
        .then((response) => { 
            // Quando da certo eu quero guardar a resposta para fazer algo com ela, para isso, devemos guardá-la em um estado.
            // Passo 5.5: Guardar a resposta no estado e renderizá-la na tela de lista de usuários.
            this.setState({users: response.data})
        }).catch((error) => { 
            // Passo 5.7: Mostrar ao usuário uma mensagem de erro caso acontece algum erro ao renderizar a lista de usuários. (erro genérico)
            alert("Ocorreu um problema, tente novamente") 
        })
    }
    // Passo 6.2: Criar uma função para deletar usuário através de uma requisição na lib.
    // Para fazer esse delete precisamos da url e do headers da lib e usamos o id como parametro da função.
    deleteUsers = (id) => {
        // const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id`
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}` //Template strings pois deve receber a variável id passada como parâmetro na função.
        const headers = {headers: {Authorization: 'victor-nogueira-lovelace'}}

        axios.delete(url, headers)
        .then((response) => {
            alert("Usuário(a) deletado com sucesso.")
            //Passo 6.4: Caso haja sucesso em deletar o usuário, eu preciso renderizar a nova lista de usuários na tela, para que eu não precise atualizar o site para que a nova lista apareca.
            // Fazemos isso chamando a função de pegar a lista de usuários aqui no .then()
            this.getUsers()
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    render() {
        console.log(this.state.users) // Imprime tudo que esta na resposta dados
        // Passo 5.5.3: Transformando lista de objetos em lista de usuários com nome e email.
        // Para fazer isso, utilizamos a função map().
        // Obs: sempre que damos um map, precisamos adicionar um key para o react otimizar a renderização. (Em caso de lista vindo da lab, utilizamos o id do usuário)
        const usersList = this.state.users.map((user) => {
            return <UserCard key={user.id}>
                {user.name}
                {/* //Passo 6.1: Criar um botão para excluir algum usuário. */}
                <button onClick={() => this.deleteUsers(user.id)}> {/*Passo 6.3: Chamar a função de deletar usuário no botão. (Quando eu chamo um parãmetro no onclick (user.id), eu devo declarar uma arrow function. O user.id é passado como parâmetro no onClick para saber qual o usuário que deve ser excluído. */}
                    X
                </button>
                </UserCard>
        })

        return (
            <div>
                
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                
               <h1>Lista de Usuários</h1>
                {/*Passo 5.6: chamar minha lista de usuários na tela. (Retorna apenas o nome pois no getUsers da minha lib consta apenas o id e o nome, caso contrário, dentro do passo 5.5.3 eu solicitaria o retorno do meu user.enmail também.*/}
               <ul>{usersList}</ul>
            </div>
        )
    }
}