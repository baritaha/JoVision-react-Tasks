// Tasks/Task#41.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 4 simple screen components
const Screen1 = () => <View style={styles.center}><Text style={styles.text}>Screen 1</Text></View>;
const Screen2 = () => <View style={styles.center}><Text style={styles.text}>Screen 2</Text></View>;
const Screen3 = () => <View style={styles.center}><Text style={styles.text}>Screen 3</Text></View>;
const Screen4 = () => <View style={styles.center}><Text style={styles.text}>Screen 4</Text></View>;

const Tab = createBottomTabNavigator();

const Task41 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Task #41</Text>
      <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="One" component={Screen1} />
          <Tab.Screen name="Two" component={Screen2} />
          <Tab.Screen name="Three" component={Screen3} />
          <Tab.Screen name="Four" component={Screen4} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{flex: 1, height: 500,marginTop:10},
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
    heading: {
    fontSize: 18,
    backgroundColor: '#bae6fd',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    top: 0,
  },
});

export default Task41;
