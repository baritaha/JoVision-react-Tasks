import React from 'react';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Task16 from './Tasks/Task#16'; // Import the Task Component
import Task17 from './Tasks/Task#17';
import Task18 from './Tasks/Task#18';
import Task19 from './Tasks/Task#19';
import Task20 from './Tasks/Task#20';
import Task21 from './Tasks/Task#21';
import Task22 from './Tasks/Task#22';
import Task23 from './Tasks/Task#23';
import Task24 from './Tasks/Task#24';
import Task25 from './Tasks/Task#25';

const App = () => {
  return (
    <ImageBackground source={require('./assets/images/imgBk2.png')}
      style={styles.background}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Task16 />
      <Task17/>
      <Task18/>
      <Task19/>
      <Task20/>
      <Task21/>
      <Task22/>
      <Task23/>
      <Task24/>
      <Task25/>
    </ScrollView>
    </ImageBackground>
  );

};

const styles = StyleSheet.create({
  background: { 
    flex: 1, 
    resizeMode: 'contain', // Ensures the image fits within the screen
    alignItems: 'center', // Centers content inside ImageBackground
    justifyContent: 'center', // Centers image itself
  },
  scrollContent: {
    flexGrow: 1,
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 100,

  },
});
export default App;
