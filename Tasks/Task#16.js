import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task16 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={() => setIsVisible(!isVisible)} />
      {isVisible && <Text style={styles.text}>abdel-bari altaha</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
});

export default Task16;
