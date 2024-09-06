import { Text, View, StyleSheet, Button } from 'react-native';

function UserScreen({ navigation }) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.rootContainer}>
      <Text> UserScreen</Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
