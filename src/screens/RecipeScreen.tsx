import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ResepScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman Saran Saji</Text>
      <Text style={styles.subtext}>
        Nanti di sini kita bisa nampilin ide resep, misal: "Kerupuk Tuna
        topping Seblak".
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

export default ResepScreen;