import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';

const PokeCard = (props) => {
    // valor do estado que guarda infos e foto do pokemon (substitui o state por useState)
    const [pokemon, setPokemon] = useState({})

    // useEffect não precisa de prevProps ou de condicional, por isso não precisamos do if e prevProps. Solicitamos apenas os dados por props para realizar esse useEffect.
    // Posso substituir os dois métodos (componentDidMount() e componentDidUpdate()) utilizando apenas um useEffect().
    useEffect(() => {
        pegaPokemon(props.pokemon); /* Props do componente pai que possui o pokeName do pokemon. */
    }, [props.pokemon])
  
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//   render() {
//     const pokemon = this.state.pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );

}

export default PokeCard;