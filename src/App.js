import logo from './logo.svg';
import './App.css';

import axios from 'axios'
import React, { useState, useEffect } from 'react';

function App() {

const [pokemonInfo, setPokemonInfo] = useState({})
const [inputText, setInputText] = useState('')
const [error, setError] = useState(false)

const fetchPokemon = ()=>{
  axios.get(`https://pokeapi.co/api/v2/pokemon/${inputText}`)
  .then((pokemon)=>{
    setPokemonInfo(pokemon.data)
    setError(false)
  })
  .catch((error)=>{
    setPokemonInfo({})
    setError({message: 'This pokemon does not exist. Try again.'})
  })
}

  // useEffect(()=>{
  //   axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  //   .then((response)=>{
  //     setPikachu(response.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // }, []) //If we put an empty array, whatever we put inside the callback function is only going to be executed once. It does not matter how many times you change the state or you re-rener the component. This callback function is only going to be executed once.

  return (
    <div className="App">
      <input type="text" onChange={(event)=>{setInputText(event.target.value)}}/>
      <button onClick={()=>{fetchPokemon()}}>Search this pokemon</button>
      {pokemonInfo.sprites 
        ? <img src={pokemonInfo.sprites.front_default} alt="pokemon" />
        : null
      }
      {error 
      ? <p>{error.message}</p>
      : null
      }
    </div>
  );
}

export default App;