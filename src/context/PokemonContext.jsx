import { createContext, useContext, useState } from 'react'

const PokemonContext = createContext(null)

//paso 2consumir en componentes
const usePokemonContext = () => useContext(PokemonContext)

//paso 1PokemonProvider se importa en APpp
export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemns] = useState([])

  const addPokemon = (pokemon, quantity) => {
    //si existe sumar cantidad, sino agregar

    setPokemns([...pokemons, { pokemon, quantity }])
    console.log({ pokemon, quantity })
  }

  const delPokemon = pokemonId => {
    //splice
    // const index = pokemons.findIndex(p => p.id === pokemonId)
    // setPokemns([...pokemons.slice(0, index), ...pokemons.slice(index + 1)])

    setPokemns(pokemons.filter(p => p.pokemon.id !== pokemonId))
  }

  //inCart

  //usewidget
  const getTotalItems = () => {
    return pokemons.reduce((acc, p) => acc + p.quantity)
  }

  //cart
  const getGrandTotal = () => {
    // return pokemons.reduce((acc, pokemon: {price}) => acc + p.quantity * prce)
    // o hacen foreach
    return 10
  }

  return <PokemonContext.Provider value={{ pokemons, addPokemon, delPokemon, getTotalItems, getGrandTotal }}>{children}</PokemonContext.Provider>
}

export default usePokemonContext
