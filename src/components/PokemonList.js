import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemon, isNext } = props;

  const loadMore = () => {
    loadPokemon();
  };

  return (
    <SafeAreaView>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} url={item.url} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext && (
            <ActivityIndicator
              size="large"
              color="#000"
              style={styles.spinner}
            />
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
  }, */
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 10 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});
