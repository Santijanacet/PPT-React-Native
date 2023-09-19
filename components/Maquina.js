import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet,Animated } from "react-native";

const Maquina = ({ selectedOption,images }) => {
  

  return (
    <View style={styles.container}>
      <Image source={images[selectedOption]} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 300,
    height: 150,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#905430",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 100,
  },
});

export default Maquina;

