import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SpaceX from './components/SpaceX'
import './App.css';
import PokeAPI from './components/PokeAPI'

export default class App extends React.Component {
  
  render() {
    
      return (
        <div>
          {/* <SpaceX /> */}
          <PokeAPI />
        </div>
      )
  }
}