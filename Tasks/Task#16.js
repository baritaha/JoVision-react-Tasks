import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task16 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.text2}>Task #16</Text>
      <Button title="Show" onPress={() => setIsVisible(!isVisible)} />
      {isVisible && <Text style={styles.text}>abdel-bari altaha</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, textAlign: 'center', alignItems: 'center',top: 10 },
  text: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  text2: { fontSize: 18, margin: 10,backgroundColor: 'lightblue', padding: 10, borderRadius: 5,width: '100%', textAlign: 'center' },

});
export default Task16;
