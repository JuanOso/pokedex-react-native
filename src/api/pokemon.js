import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(endpoint) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    // || sirve para que si existe el valor de la izquierda tome ese, si no tome el de la derecha
    const response = await fetch(endpoint || url);
    const result = await response.json();
    //console.log(result.results.length);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    sa;
    throw error;
  }
}

export async function getPokemonDetailsById(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
