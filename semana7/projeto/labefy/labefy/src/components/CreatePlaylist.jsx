import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class CreatePlaylist extends React.Component {
    state = {
        nome: "",
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    registerPlaylist = () => {
        // this.setState(this.state.nome)
        console.log(this.state.nome)
    }

    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {name: this.state.nome}
        const headers = {headers: {Authorization: 'victor-nogueira-lovelace'}}

        axios.post(url, body, headers)
        .then((response) => {
            console.log(response)
            alert("Playlist Criada com Sucesso!")
            this.setState({nome: ""})
        }).catch((error) => {
            console.log(error.response.data)
            alert("Já existe uma playlist com esse nome!")
        })
    }

    render() {
        return (
            <div>
                <h1>Criar Nova Playlist</h1>

                <div>
                    <label htmlFor="">Nome da playlist:</label>
                    <input 
                    type="text" 
                    placeholder={"Nome da playlist"}
                    onChange={this.onChangeNome}
                    value={this.state.nome}
                    />
                </div>
                <div>
                    <button onClick={this.createPlaylist}>Criar Playlist</button>
                </div>
            </div>
        )
    }
} 