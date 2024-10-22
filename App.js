// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen'; // Import your HomeScreen component
import ImageModifierScreen from './src/components/ImageModifierScreen'; // Create this later

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImageModifier" component={ImageModifierScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;