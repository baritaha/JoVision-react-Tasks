import React from 'react';
import { StyleSheet, View } from 'react-native';
import Task16 from './Tasks/Task#16'; // Import the Task Component
import Task17 from './Tasks/Task#17';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Task16 />
      <Task17/>
    </View>
  );
};

export default App;
