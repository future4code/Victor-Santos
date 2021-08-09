import React from 'react'
import axios from 'axios'

export default class SpaceX extends React.Component {
    state = {
      missions: []
    }
  
    componentDidMount() {
      this.getMissions()
    }
    getMissions = () => {
      const url = "https://api.spacexdata.com/v3/missions"
  
      axios.get(url)
      .then((response) => {
        console.log(response.data)
        this.setState({missions: response.data})
      }).catch((error) => {
        console.log(error.response)
      })
    }
  
    render() {
      const missionsList = this.state.missions.map((mission) => {
        return (
          <div key={mission.mission_id}>
            <p>Nome da missão: {mission.mission_name}</p>
            <p>Fabricante: {mission.manufacturers.map((manufacturer) => <p>{manufacturer}</p>)}</p>
            <a href={mission.wikipedia} target="_blank">Mais detalhes sobre a missão</a>
            <hr />
          </div>
        )
      })
      
      return (
        <div>
          <h1>Space X</h1>
          <hr />
          <div>
            <h3>Missões Realizadas</h3>
            {missionsList}
          </div>
        </div>
      )
    }
  }