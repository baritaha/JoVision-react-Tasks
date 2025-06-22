import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import ComponentTwo from '../components/ComponentTwo_Task38';
import SharedTextContext from '../contexts/SharedTextContext';

const Task38 = () => {
  const sharedState = useState('');

  return (
    <SharedTextContext.Provider value={sharedState}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Task #38 - Shared Context</Text>
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
      </SafeAreaView>
    </SharedTextContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
    marginTop:20,
    alignItems:'center',
  },
heading: {fontSize: 18, margin: 10, backgroundColor: 'lightblue',
     padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold',
      marginTop:0,
    },
});

export default Task38;
