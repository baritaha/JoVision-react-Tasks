import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Task17 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.text2}>Task #17</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={styles.buttonText}>{isVisible ? 'Hide' : 'Show'}</Text>
      </TouchableOpacity>

      {isVisible && <Text style={styles.text}>abdel-bari altaha</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1,textAlign:'center',alignItems:'center'},
  button: { backgroundColor: '#007AFF', padding: 10, borderRadius: 8 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  text: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  text2: { fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold' },
});

export default Task17;
