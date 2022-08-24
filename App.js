import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/components/Navigation/MainNav';

export default function App() {
  return (
    <NavigationContainer>
      <MainNav/>
    </NavigationContainer>
  );
}