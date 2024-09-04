import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import mealsOverViewScreen from '../screens/MealsOverViewScreen';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
      <Stack.Screen name="MealsOverview" component={mealsOverViewScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
