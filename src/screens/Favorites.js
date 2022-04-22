import { View, Text, Button } from "react-native";
import React, { useState, useCallback } from "react";
import { getPokemonsFavorite } from "../api/favorite";
import useAuth from "../hooks/useAuth";
import { getPokemonDetailsById } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import { useFocusEffect } from "@react-navigation/native";
import { API_HOST } from "../utils/constants";
import NoLogged from "../components/NoLogged";

export default function Favorites() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();
  //console.log(pokemons);

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavorite();
          let pokemonsArray = [];
          for await (let pokemon of response) {
            const pokemonDetails = await getPokemonDetailsById(pokemon);
            //console.log(pokemonDetails, " response");
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              url: `${API_HOST}/pokemon/${pokemon}`,
              imagen:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  console.log(pokemons);

  return (
    <View>{auth ? <PokemonList pokemons={pokemons} /> : <NoLogged />}</View>
  );
}
