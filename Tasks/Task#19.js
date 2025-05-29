import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MyClassPage_Task19 from '../components/MyClassPage_Task19';

const Task19 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.text2}>Task#19</Text>
      <TouchableOpacity style={styles.button} onPress={() => setIsVisible(!isVisible)}>
        <Text style={styles.buttonText}>{isVisible ? 'Hide' : 'Show'}</Text>
      </TouchableOpacity>

      {isVisible && <MyClassPage_Task19 />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center',minHeight:250 },
  button: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  text2: { fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold' },
});

export default Task19;
