import { Text, View, FlatList } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategories(itemData) {
  return (
    <CategoryGridTile
      title={itemData.item.title}
      content={itemData.item.color}
    />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategories}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
