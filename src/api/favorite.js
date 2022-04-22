import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavorite() {
  try {
    //await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify([]));
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavorite(id) {
  try {
    const favorites = await getPokemonsFavorite();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isFavoritePokemon(id) {
  try {
    const response = await getPokemonsFavorite();
    return response.includes(id);
  } catch (error) {
    throw error;
  }
}

export async function removePokemonFavorite(id) {
  try {
    const favorites = await getPokemonsFavorite();
    const newFavorites = favorites.filter((fav) => fav !== id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}
