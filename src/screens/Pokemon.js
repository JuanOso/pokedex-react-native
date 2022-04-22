import { ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonDetailsApi } from "../api/pokemon";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Favorite from "../components/Pokemon/Favorite";

export default function Pokemon(props) {
  //doble destructuracion
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.url);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={18}
          style={{ marginLeft: 6 }}
          onPress={navigation.goBack}
        />
      ),
    });
  });

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        imagen={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
