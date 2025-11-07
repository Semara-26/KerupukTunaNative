import React from "react";
import { View, StyleSheet } from "react-native";


const BrandComponent = () => {
  return (
    <View style={styles.brandContainer}/>
  );
};

const styles = StyleSheet.create({
  brandContainer: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 80,
  },
});

export default BrandComponent;
