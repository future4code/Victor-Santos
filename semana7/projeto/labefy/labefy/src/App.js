import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css';
import CreatePlaylist from './components/CreatePlaylist'
import GetPlaylists from './components/playlists/GetPlaylists'

export default class App extends React.Component {
  state = {
    telaAtual: "telaInicio"
  }
  
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'createPlaylist':
        return <CreatePlaylist />
      case 'mostrarPlaylists':
        return <GetPlaylists />
      // default:
      //   return "Erro! Página não encontrada!"
    }
  }

  mostrarPlaylists = () => {
    this.setState({telaAtual: "mostrarPlaylists"})
  }

  criarPlaylist = () => {
    this.setState({telaAtual: "createPlaylist"})
  }




  render() {

    return (
      <div className="App">
        <h1>LABEFY</h1>

        <div>
          <button onClick={this.mostrarPlaylists}>Mostrar Playlists</button>
          <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </div>

        {this.escolheTela()}
      </div>
    );
  }
}
