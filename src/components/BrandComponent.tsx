import React from "react";
import { View, StyleSheet, Image } from "react-native";
import logo from "../assets/images/logo-tuna.png";

const BrandComponent = () => {
  return (
    <View style={styles.brandContainer}>
        <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  brandContainer: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40, // Bikin bulat
  },
});

export default BrandComponent;
