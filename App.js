import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/route/StackNavigation';
import DrawerApp from './NavigationPractice/DrawerNavigationPractice/DrawerApp';
import TabApp from './NavigationPractice/TabNavigationPractice/TabApp';

export default function App() {
  return (
    <>
      <TabApp />

      {/*<DrawerApp />*/}
      {/*<StatusBar style="light" />*/}
      {/*<NavigationContainer>*/}
      {/*  <StackNavigation />*/}
      {/*</NavigationContainer>*/}
    </>
  );
}
