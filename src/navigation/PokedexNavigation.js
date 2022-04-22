import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stak = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stak.Navigator>
      <Stak.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ headerShown: false }}
      />
      <Stak.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "Favoritos",
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
    </Stak.Navigator>
  );
}
