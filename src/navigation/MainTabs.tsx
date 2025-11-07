import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';

// Import semua screen untuk Tab
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import OrderScreen from '../screens/OrderScreen';
import ContactUsScreen from '../screens/ContactUsScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Fungsi ini mengatur icon berdasarkan nama route
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'alert-circle-outline'; // Default icon

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Product') {
            iconName = focused ? 'bag-handle' : 'bag-handle-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Contact Us') {
            iconName = focused ? 'call' : 'call-outline';
          }

          // Return komponen Icon-nya
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Opsi styling tambahan
        tabBarActiveTintColor: '#0077b6', // Warna icon saat aktif (sesuai tema)
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Kita sembunyikan header di setiap tab
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Regular', // Terapkan font Poppins di label tab
          fontSize: 12,
        },
        tabBarStyle: {
          paddingTop: 5,
        },
      })}
    >
      {/* Ini adalah 4 Tab utama kita */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Product" component={ProductScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Contact Us" component={ContactUsScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
