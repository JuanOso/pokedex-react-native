import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver esta sección debes iniciar sesíon
      </Text>
      <Button
        title="Ir al loguin"
        onPress={() => navigation.navigate("Account Nav")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
