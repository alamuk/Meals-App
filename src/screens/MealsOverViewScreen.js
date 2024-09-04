import { View, StyleSheet, FlatList, Text } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import MealItem from '../components/UI/MealItem';
// import{ useRoute} from '@react-navigation/native';

function MealsOverViewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealsItems(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealsItems}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
