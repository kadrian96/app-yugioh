import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigators/MainNavigator';
export default function App() {
  return (
   
    <StackNavigator/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
