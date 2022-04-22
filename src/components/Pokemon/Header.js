import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import getColorByType from "../../utils/getColorByType";

export default function Header(props) {
  const { name, order, imagen, type } = props;
  const color = getColorByType(type);

  const bgStyle = [{ backgroundColor: color, ...styles.bg }];
  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: imagen }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
    textTransform: "capitalize",
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});
