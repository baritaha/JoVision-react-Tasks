import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import SharedTextContext from '../contexts/SharedTextContext';
import ComponentOne from './ComponentOne_Task38';

const ComponentTwo = () => {
  const [sharedText, setSharedText] = useContext(SharedTextContext);

  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={sharedText}
        onChangeText={setSharedText}
      />
      <ComponentOne />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width:'100%',
    maxWidth:'70%',
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#90caf9',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 40,
  },
});

export default ComponentTwo;
