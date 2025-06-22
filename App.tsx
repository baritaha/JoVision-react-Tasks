import React from 'react';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Task16 from './Tasks/Task#16';
import Task17 from './Tasks/Task#17';
import Task18 from './Tasks/Task#18';
import Task19 from './Tasks/Task#19';
import Task20 from './Tasks/Task#20';
import Task21 from './Tasks/Task#21';
import Task22 from './Tasks/Task#22';
import Task23 from './Tasks/Task#23';
import Task24 from './Tasks/Task#24';
import Task25 from './Tasks/Task#25';
import Task26 from './Tasks/Task#26';
import Task27 from './Tasks/Task#27';
import Task28 from './Tasks/Task#28';
import Task29 from './Tasks/Task#29';
import Task32 from './Tasks/Task#32';
import Task33 from './Tasks/Task#33';
import Task34 from './Tasks/Task#34';
import Task35 from './Tasks/Task#35';
import Task36 from './Tasks/Task#36';
import Task38 from './Tasks/Task#38';

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
      <Task26/>
      <Task27/>
      <Task28/>
     <Task29/>
     <Task32/>
     <Task33/>
     <Task34/>
     <Task35/>
     <Task36/>
     <Task38/>
    </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 100,

  },
});
export default App;
