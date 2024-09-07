import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/route/StackNavigation';
import DrawerNavigation from './src/route/DrawerNavigation';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
}
