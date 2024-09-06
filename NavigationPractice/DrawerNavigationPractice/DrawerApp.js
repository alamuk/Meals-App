import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './WelvomeScreen';
import UserScreen from './UserScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
function DrawerApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3e75c2' },
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: '#7a99c4',
          drawerActiveTintColor: '#3c0a6b',
          // drawerContentStyle: { backgroundColor: '#3e75c2' },
          // drawerStyle: { backgroundColor: '#ccc' },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Back',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerApp;
