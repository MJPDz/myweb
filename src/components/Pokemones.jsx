import { useState } from "react"
import { usePokemon } from "../hooks/usePokemon";

export const Pokemones = () => {

  const [actual, setActual] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");
  const { pokemones, loading, anterior, siguiente } = usePokemon(actual)

  return (
    loading ? 
      <p>Cargando pokemones</p>
    :
    <div>
      <ul>
        {
          pokemones.map((pokemon, index) => {
            return <li key={index}>{pokemon.name}</li>
          })
        }
      </ul>

      <button onClick={() => siguiente != null && setActual(siguiente)}>Siguientes</button>
      <button onClick={() => anterior != null && setActual(anterior)}>Anteriores</button>
    </div>
  )
}