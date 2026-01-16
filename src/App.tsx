import React from 'react';

import AppNavigator from './navigation/AppNavigator'; // Import navigator utama kita
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
