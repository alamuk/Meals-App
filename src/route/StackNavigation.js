import { Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverViewScreen from '../screens/MealsOverViewScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import DrawerNavigator from './DrawerNavigation';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{
          title: 'About the Meal',
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
