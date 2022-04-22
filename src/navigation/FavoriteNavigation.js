import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";
import Pokemon from "../screens/Pokemon";

const Stak = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stak.Navigator>
      <Stak.Screen
        name="Favorite"
        component={Favorites}
        options={{ title: "Favoritos" }}
      />
      <Stak.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
    </Stak.Navigator>
  );
}
