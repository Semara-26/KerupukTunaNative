import { Text } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.testText}>Screen ni bang!!</Text>
      <Text style={styles.defaultText}>(Ini font default)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testText: {
    fontSize: 24,
    // Gunakan nama file font-nya, tanpa .ttf
    fontFamily: 'Poppins-Regular',
  },
  defaultText: {
    fontSize: 20,
  },
});

export default ContactUsScreen;
