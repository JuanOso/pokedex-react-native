import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import getColorByType from "../utils/getColorByType";

export default function PokemonCard(props) {
  const navigation = useNavigation();
  const { pokemon, url } = props;
  //console.log(props, " props");
  const goToPokemon = () => {
    navigation.navigate("Pokemon", { url: url });
  };

  const pokemonColor = getColorByType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.imagen }} style={styles.image} />
            {/* <Text>{pokemon.name}</Text> */}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  image: {
    position: "absolute",
    right: 2,
    bottom: 2,
    width: 90,
    height: 90,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    textTransform: "capitalize",
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
});
