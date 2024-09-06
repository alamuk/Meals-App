import { Text, View, StyleSheet, Button } from 'react-native';

function UserTabScreen({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <Text> UserScreen</Text>
    </View>
  );
}

export default UserTabScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
