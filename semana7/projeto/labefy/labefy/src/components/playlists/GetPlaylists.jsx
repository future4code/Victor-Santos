import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class GetPlaylists extends React.Component {
    state = {
        playlists: [],
        playlistData: {},
        name: [],
    }

    componentDidMount() {
        this.getPlaylists()
        this.getPlaylist()
    }

    getPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {headers: {Authorization: 'victor-nogueira-lovelace'}}

        axios.get(url, headers)
        .then((response) => {
            console.log(response.data.result.list)
            this.setState({playlists: response.data.result.list})
        }).catch((error) => {
            console.log(error)
            alert(error)
        })

    }

    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        const headers = {headers: {Authorization: 'victor-nogueira-lovelace'}}

        axios.delete(url, headers)
        .then((response) => {
            alert("Playlist deletada com sucesso!")
            this.setState({playlistData: response.data.result.list})
            this.setState({name: response.data.result.list.name})

        }).catch((error) => {
            console.log(error.response)
        })

    }

    getPlaylist = (name) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string`
        const body = {name: ""}
        const headers = {headers: {Authorization: "victor-nogueira-lovelace"}}

        axios.get(url, body, headers)
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }


    render() {
        console.log(this.state.playlists)
        console.log(this.state.name)

        const lista = this.state.playlists.map((list) => {
            return <div key={list.id}>
                {list.name}
                
                <button onClick={() => this.deletePlaylist(list.id)}>Remover</button>
                <h5>Detalhes</h5>
                <p>Musica: </p>
                <p>Artista: </p>
                <p>Link: </p>
            </div>
        })
        return (
            <div>
                <h1>Suas Playlists</h1>
                <p>Playlists</p>
                
                {lista}

            </div>
        )
    }
}