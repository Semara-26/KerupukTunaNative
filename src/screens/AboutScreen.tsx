import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman About</Text>
      <Text style={styles.subtext}>
        Organized by SHIKIZIMA. CORP
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

export default AboutScreen;