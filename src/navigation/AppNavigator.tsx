import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LocationScreen from '../screens/LocationScreen';
import RecipeScreen from '../screens/RecipeScreen';
import AboutScreen from '../screens/AboutScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';

import MainTabs from './MainTabs';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{ title: 'Alamat' }}
      />
      <Stack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{ title: 'Saran Saji' }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'Tentang Kami' }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
