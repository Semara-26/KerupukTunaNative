import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

// Ini cuma placeholder sementara
const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman Order</Text>
      <Text style={styles.subtext}>Tolong Digarap Ya Gung</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular', // Tes font
  },
  subtext: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default OrderScreen;