import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ComponentTask40 from '../components/component_Task39';

const Task40 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task #40 (use class)</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setVisible((prev) => !prev)}
      >
        <Text style={styles.textBtn}>
          {visible ? 'Hide Component' : 'Show Component'}
        </Text>
      </TouchableOpacity>
      {visible && <ComponentTask40 />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    minHeight: 250,
    marginTop:10,
  },
  heading: {
    fontSize: 18,
    margin: 10,
    backgroundColor: '#bae6fd',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    top: -10,
  },
  btn: {
    position: 'absolute',
    top: 65,
    backgroundColor: 'blue',
    padding: 6,
    borderRadius: 5,
  },
  textBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Task40;
