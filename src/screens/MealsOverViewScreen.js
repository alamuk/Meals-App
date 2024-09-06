import { useLayoutEffect } from 'react';

import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../../data/dummy-data';
import MealItem from '../components/UI/MealItem';

function MealsOverViewScreen({ route, navigation }) {
  // function pressHandler() {            // from Main-Screen Navigation
  //   .navigate('MealDetails');
  // }

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealsItems({ item }) {
    // const item = itemData.item
    const MealsItemsProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...MealsItemsProps} />; // onPress={pressHandler}// from Main-Screen Navigation
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
