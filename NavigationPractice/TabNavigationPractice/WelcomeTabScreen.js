import { StyleSheet, Text, View } from 'react-native';

function WelcomeTabScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>Welcome back </Text>
    </View>
  );
}

export default WelcomeTabScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
