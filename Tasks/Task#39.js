import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ComponentTask39 from '../components/component_Task39';

const Task39 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Task #39 (use function)</Text>
      <TouchableOpacity
       style={styles.btn}
        onPress={() => setVisible(prev => !prev)}
      >
        <Text style={styles.textBtn}>{visible ? 'Hide Component' : 'Show Component'}</Text>
      </TouchableOpacity>
      {visible && <ComponentTask39 />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems:'center',
    justifyContent:'center',
    minHeight:250,
    position:'relative',
    borderRadius:10,

  },
  heading: {fontSize: 18, margin: 10, backgroundColor: 'lightblue',
     padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold',
    position:'absolute',
    top:-10,
    },
    btn:{position:'absolute',top:65,backgroundColor:'blue',padding:5,borderRadius:5},
    textBtn:{color:'white',fontSize:16,fontWeight:'600'},
});

export default Task39;
