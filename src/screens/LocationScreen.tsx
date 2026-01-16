import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alamat</Text>
      <Text style={styles.subtext}>
        Jl. Ikan Tuna No. 26, Denpasar, Bali
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  subtext: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LocationScreen;