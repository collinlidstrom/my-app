import React from 'react'
import PokemonCard from './PokemonCard'

export default funtion Pokemon(props) {

  const data = await getPokemon(props.pokemon)
  console.log(data)

  return (
    <div id='pokedex'>
      <div align='center'>
        Pokemon data:
      </div>
      <div id='pokemonCard'>
        <PokemonCard/>
      </div>
      <br/>
      <div id='getPokemonResponse'>
        {data}
      </div>
    </div>
  )
}
