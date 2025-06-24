import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSavedText } from '../redux/storeTask39.js';

const ComponentTask39 = () => {
  const savedValue = useSelector(state => state.savedText);
  const [text, setText] = useState(savedValue);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSavedText(text)); // Save on unmount
    };
  }, [dispatch, text]);

  return (
    <View style={styles.box}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type here"
        style={styles.input}
      />
      <Text style={styles.text}>Inside: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 8,
    width:'100%',
    maxWidth:'70%',
    position:'relative',
    top:35,
    minHeight:110,
  },
  input: {
    borderWidth: 1,
    borderColor: '#90caf9',
    padding: 10,
    top:10,
    borderRadius: 6,
    position:'absolute',
    width:'100%',
    left:13,
  },
  text:{top:45,backgroundColor:'aqua',fontSize:18,padding:5,borderRadius:6,color:'black'},

});

export default ComponentTask39;
