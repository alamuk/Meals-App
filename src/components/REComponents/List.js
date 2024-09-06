import { Text, View, StyleSheet } from 'react-native';
import Colors from '../utils/Colors';

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.primary100,
    borderRadius: 6,
    marginHorizontal: 8,
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  itemText: {
    color: Colors.primary,
    textAlign: 'center',
  },
});
