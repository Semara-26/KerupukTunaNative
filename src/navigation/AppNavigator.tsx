import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ResellerScreen from '../screens/ResellerScreen';
import RecipeScreen from '../screens/RecipeScreen';
import AboutScreen from '../screens/AboutScreen';
import LoginScreen from '../screens/LoginScreen';

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
        name="Reseller"
        component={ResellerScreen}
        options={{ title: 'Info Reseller' }}
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
    </Stack.Navigator>
  );
};

export default AppNavigator;
