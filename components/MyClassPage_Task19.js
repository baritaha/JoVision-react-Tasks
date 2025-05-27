import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage_Task19 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>this text come from
             <Text style={styles.innerText}> MyClassPage </Text>
              component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold',alignItems:'center',textAlign:'center' },
  innerText:{padding:17,color:'chocolate',backgroundColor: '#ADD8E6',borderRadius: 5},
});

export default MyClassPage_Task19;
