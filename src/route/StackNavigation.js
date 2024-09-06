import { Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverViewScreen from '../screens/MealsOverViewScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

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
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Stack.Screen
        name="MealsOverview"
        component={MealsOverViewScreen}
        // options={({ route, navigation }) => {
        //   const catId = route.params.categoryId.title;
        //   return {
        //     title: catId,
        //   };
        // }}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        //   options={{
        //     headerRight: () => {
        //       return <Button title="Tap me!" onPress={() => {}}/>;
        //     },
        //   }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
