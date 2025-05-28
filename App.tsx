import React from 'react';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Task16 from './Tasks/Task#16'; // Import the Task Component
import Task17 from './Tasks/Task#17';
import Task18 from './Tasks/Task#18';
import Task19 from './Tasks/Task#19';
import Task20 from './Tasks/Task#20';
import Task21 from './Tasks/Task#21';
import Task22 from './Tasks/Task#22';

const App = () => {
  return (
    <ImageBackground source={require('./assets/images/imgBk.png')} 
      style={styles.background}>
    <ScrollView style={styles.container}>
      <Task16 />
      <Task17/>
      <Task18/>
      <Task19/>
      <Task20/>
      <Task21/>
      <Task22/>
    </ScrollView>
    </ImageBackground>
  );

};


const styles=StyleSheet.create({
   background: { flex: 1 }, // Ensures full-screen background
  container: { flex: 1, padding: 10 }, // Allows content inside to scroll
});
export default App;
