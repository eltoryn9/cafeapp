import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './navigators/HomeStackNavigator';

export default function App() {
  return(
    <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>
  );
}