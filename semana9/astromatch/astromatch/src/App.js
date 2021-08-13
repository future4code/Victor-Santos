import React from 'react'
import './App.css'
import CardProfile from './components/CardProfile/CardProfile'
import MatchScreen from './components/MatchScreen/MatchScreen'
import {useState, useEffect} from 'react'



function App() {
  const [telaAtual, setTelaAtual] = useState("cardProfile")

  useEffect(() => {
    selectPage()
  }, [])
  
  const selectPage = () => {
    switch (telaAtual) {
      case "cardProfile":
        return <CardProfile button={changeMatchs}/>
      case "matches":
        return <MatchScreen button={changeProfile}/>
      default:
        return <div>Error</div>
    }
  }

  const changeMatchs = () => {
    if(telaAtual === "cardProfile") {
      setTelaAtual("matches")
    } 
  }

  const changeProfile = () => {
    if(telaAtual === "matches") {
      setTelaAtual("cardProfile")
    }
  }


  return (
    <div>
      <div>
        <h1>astromatch</h1>
        
      </div>
      <div>
        {selectPage()}
      </div>

    </div>
  )
}

export default App