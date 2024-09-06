import { Text, View, StyleSheet } from 'react-native';

function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    color: '#e2b497',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});
