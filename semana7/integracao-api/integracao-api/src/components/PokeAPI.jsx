import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 200px;
    /* justify-content: center; */
    align-items: center;
    > img {
        width: 200px;
        /* border: 1px solid black; */
        /* padding: 0; */
        box-shadow: 2px 2px 10px gray;
        margin: 10px;
        border-radius: 5%;
    }
`


export default class PokeAPI extends React.Component {
    state = {
        pokemons: [],
        picture: "",
    }

    componentDidMount() {
        this.getPokemons()
    }


    getPokemons = () => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
        axios.get(url)
        .then((response) => {
            // console.log(response.data.results)
            this.setState({pokemons: response.data.results})
        }).catch((error) => {
            console.log(error.response)
        })
    }

    getPokePicture = async (event) => {
        console.log(event.target.value)
        const url = event.target.value
        const response = await axios.get(`${url}`)
        // console.log("Resposta getPicture: ", response.data.sprites.front_default)
        this.setState({picture: response.data.sprites.front_default})

    }

    render() {
        const pokemonList = this.state.pokemons.map((pokemon) => {
            return (
                <option key={pokemon.name} value={pokemon.url}>{pokemon.name.toUpperCase()}</option>
            )
        })
        return(

            <div>
                <h1>POKÉMONS</h1>
                
                <PokemonContainer>
                    <select onChange={this.getPokePicture}>
                    <option>Selecione um pokémon</option>
                    {pokemonList}</select>
                    {this.state.picture &&
                        <img src={this.state.picture} alt="Foto do Pokémon" />
                    }
                </PokemonContainer>
            </div>
        )
    }
}