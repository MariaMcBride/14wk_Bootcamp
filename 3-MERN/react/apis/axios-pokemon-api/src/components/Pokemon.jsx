import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=1')
      .then((response) => {
        setPokemonNames(response.data.results);
        console.log(response.data);
      })
  }

  return (
    <div className='mx-auto text-center m-5 card'>
      <div className="p-3">
        <button onClick={fetchData} className='btn btn-primary m-3'>Fetch Pokemon</button>
        {pokemonNames.map((pokemon, i) => {
          return (
            <p key={i} className='m-0'>{pokemon.name}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Pokemon
