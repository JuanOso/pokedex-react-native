import { View, Text, StyleSheet } from "react-native";
import React from "react";
import getColorByType from "../../utils/getColorByType";

export default function Type(props) {
  const { types } = props;
  return (
    <View style={styles.content}>
      {types.map((item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByType(item.type.name),
          }}
        >
          <Text style={styles.typeName}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    //paddingHorizontal: 20,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  typeName: {
    textTransform: "capitalize",
  },
});
