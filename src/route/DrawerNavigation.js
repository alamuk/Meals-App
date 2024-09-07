import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#fff',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#c4af9a',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
