import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screens/Account";

const Stak = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stak.Navigator>
      <Stak.Screen
        name="Account"
        component={Account}
        options={{ title: "Account Stack" }}
      />
    </Stak.Navigator>
  );
}
