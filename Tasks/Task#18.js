import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Task18 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Task #18</Text>
      {isLoading ? (
        <>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Loading...</Text>
        </>
      ) : (
        <Text style={styles.nameText}>abdel-bari altaha</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center',minHeight:150},
  loadingText: { fontSize: 20, marginTop: 10, color: 'aqua' },
  nameText: { fontSize: 28, fontWeight: 'bold', color: 'black',padding:20 },
 text2: { fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold' },
});

export default Task18;
