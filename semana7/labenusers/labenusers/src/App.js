import React from 'react'
import './App.css';
import { Cadastro } from './components/Cadastro'
import { ListaUsers } from './components/ListaUsers'

export class App extends React.Component {
  state = {
    pagina: false,
  }

  onClickLista = () => {
    
  }

  render() {
    return (
      <div>
        <Cadastro />
        <button>
          Mostrar lista
        </button>

        <ListaUsers />
      </div>
    )
  }
}

export default App;
