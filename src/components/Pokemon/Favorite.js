import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import useAuth from "../../hooks/useAuth";
import { addPokemonFavorite, isFavoritePokemon } from "../../api/favorite";
import { removePokemonFavorite } from "../../api/favorite";

export default function Favorite(props) {
  const { auth } = useAuth();
  const { id } = props;

  const [isFavorite, setIsFavorite] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await isFavoritePokemon(id);
        console.log(response, " response");
        setIsFavorite(response);
        console.log(isFavorite, " is favorite");
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id]);

  const addFavorites = async () => {
    await addPokemonFavorite(id);
    setIsFavorite(true);
  };

  const removeFavorites = async () => {
    try {
      await removePokemonFavorite(id);
      setIsFavorite(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Icon
      name="heart"
      color={auth ? "#fff" : "#ffffff80"}
      size={20}
      onPress={isFavorite ? removeFavorites : addFavorites}
      style={{ marginRight: 20 }}
      disabled={!auth}
      solid={isFavorite}
    />
  );
}
