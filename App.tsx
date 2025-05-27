import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Task16 from './Tasks/Task#16'; // Import the Task Component
import Task17 from './Tasks/Task#17';
import Task18 from './Tasks/Task#18';
import Task19 from './Tasks/Task#19';
import Task20 from './Tasks/Task#20';
import Task21 from './Tasks/Task#21';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Task16 />
      <Task17/>
      <Task18/>
      <Task19/>
      <Task20/>
      <Task21/>
    </ScrollView>
  );
};

export default App;
