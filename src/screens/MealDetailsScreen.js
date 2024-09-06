import { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import MealDetailsComponent from '../components/UI/MealDetailsComponent';
import SubTitle from '../components/REComponents/SubTitle';
import List from '../components/REComponents/List';
import IconButton from '../components/REComponents/IconButton';

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonHandler() {
    console.log('button Pressed');
  }

  const iconProps = {
    // onPress: () => headerButtonHandler(),
    color: 'white',
    icon: 'star',
    size: 24,
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={headerButtonHandler} {...iconProps} />;
      },
    });
  }, [navigation, headerButtonHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetailsComponent
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle> Ingredients </SubTitle>
          <List data={selectedMeal.ingredients} />

          <SubTitle> Steps </SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 8,
    textAlign: 'center',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
