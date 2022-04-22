import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonsApi, getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemonsState, setPokemonsState] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  useEffect(() => {
    (async () => {
      await loadPokemon();
      //console.log(pokemonsState.lenght);
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      let pokemonsArray = [];
      for await (let pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          url: pokemon.url,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemonsState([...pokemonsState, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <PokemonList
        pokemons={pokemonsState}
        loadPokemon={loadPokemon}
        isNext={nextUrl}
      />
    </View>
  );
}
