import React from 'react'
import './App.css';
import { Cadastro } from './components/Cadastro'
import { ListaUsers } from './components/ListaUsers'

export class App extends React.Component {
  // Alternar entre as telas (cadastro e lista de usuários)
  // Quando eu tenho duas telas e quero alternar entre elas, utiliza a renderização condicional
  // Primeiro passo é criar um estado para essa renderização
  state = {
    telaAtual: "cadastro",
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <ListaUsers irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada</div>
    }
  }

  // Definindo a alternancia de telas.
  //Para definir uma alteração de telas eu dependo da minha propriedade no estado que antes estavamos mudando manualmente.
  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }


  render() {
    return (
      <div>
        
          <h1>Tela Inicial</h1>

        {this.escolheTela()}

        
      </div>
    )
  }
}

export default App;
