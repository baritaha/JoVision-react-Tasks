// Tasks/Task#41.js
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 4 simple screen components
const Screen1 = () =>
 <View style={styles.center}>
  <Text style={styles.text}>Screen 1</Text>
  <Image
  source={require('../assets/images/screen1.png')}
  style={styles.image}
  />
  </View>;
const Screen2 = () =>
   <View style={styles.center}>
    <Text style={styles.text}>Screen 2</Text>
    <Image
  source={require('../assets/images/screen2.png')}
  style={styles.image}
  />
    </View>;
const Screen3 = () =>
   <View style={styles.center}>
     <Text style={styles.text}>Screen 3</Text>
     <Image
  source={require('../assets/images/screen3.png')}
  style={styles.image}
  />
    </View>;
const Screen4 = () =>
<View style={styles.center}>
  <Text style={styles.text}>Screen 4</Text>
   <Image
  source={require('../assets/images/screen4.png')}
  style={styles.image}
  />
  </View>;

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
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
  },
  text: {
    fontSize: 24,
    position:'absolute',
    top:150,
    color:'white',
    zIndex:1,
    backgroundColor:'rgba(128, 128, 128, 0.6)',
    padding:17,
    width:'100%',
    textAlign:'center',
    borderRadius:5,
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
  image: {
    width:'100%',
    height:'100%',
    minHeight:400,
  borderRadius: 10,
   resizeMode:'cover',
},

});

export default Task41;
