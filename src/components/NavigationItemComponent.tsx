import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const NavigationItemComponent = ({ title = '', icon = '' }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.navigationItem}>
      <Pressable style={{flex:1}} onPress={() => navigation.navigate(title)}>
        <View style={styles.navigationItemImage}>
          <Ionicons name={icon} size={40} color={'#0077b6'} />
        </View>
        <View style={styles.navigationItemLabel}>
          <Text style={styles.label}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0077b6',
  },
  navigationItem: {
    width: 80,
    height: 80,
    // borderRadius: 50,
  },
  navigationItemImage: {
    // backgroundColor: "#c9cdd1ff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationItemLabel: {
    width: 80,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavigationItemComponent;