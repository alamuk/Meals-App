import { FlatList } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTile from '../components/UI/CategoryGridTile';

function CategoriesScreen({ navigation }) {
  function renderCategories(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategories}
      keyExtractor={(item) => item.id}
      numColumns={2}
      // navigation={navigation}
    />
  );
}

export default CategoriesScreen;
