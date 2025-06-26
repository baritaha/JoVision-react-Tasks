// Tasks/Task#41.js
import React from 'react';
import { View, Text, StyleSheet,Image,Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';

const Screen1 = ({navigation}) =>
<ImageBackground source={require('../assets/images/screen1.png')} style={styles.image}>
 <Text style={styles.text}>Screen 1</Text>
 <View style={styles.buttonOverlay}>
    <Button title="Screen 2" onPress={()=>navigation.navigate('Two')} />
    <Button title="Screen 3" onPress={()=>navigation.navigate('Three')} />
    <Button title="Screen 4" onPress={()=>navigation.navigate('Four')} />
  </View>
</ImageBackground>
;
const Screen2 = ({navigation}) =>
<ImageBackground source={require('../assets/images/screen2.png')} style={styles.image}>
 <Text style={styles.text}>Screen 2</Text>
 <View style={styles.buttonOverlay}>
    <Button title="Screen 1" onPress={()=>navigation.navigate('One')} />
    <Button title="Screen 3" onPress={()=>navigation.navigate('Three')} />
    <Button title="Screen 4" onPress={()=>navigation.navigate('Four')} />
  </View>
</ImageBackground>;
const Screen3 = ({navigation}) =>
  <ImageBackground source={require('../assets/images/screen3.png')} style={styles.image}>
 <Text style={styles.text}>Screen 3</Text>
 <View style={styles.buttonOverlay}>
    <Button title="Screen 1" onPress={()=>navigation.navigate('One')} />
    <Button title="Screen 2" onPress={()=>navigation.navigate('Two')} />
    <Button title="Screen 4" onPress={()=>navigation.navigate('Four')} />
  </View>
</ImageBackground>;
const Screen4 = ({navigation}) =>
<ImageBackground source={require('../assets/images/screen4.png')} style={styles.image}>
 <Text style={styles.text}>Screen 4</Text>
 <View style={styles.buttonOverlay}>
    <Button title="Screen 1" onPress={()=>navigation.navigate('One')} />
    <Button title="Screen 2" onPress={()=>navigation.navigate('Two')} />
    <Button title="Screen 3" onPress={()=>navigation.navigate('Three')} />
  </View>
</ImageBackground>;

const Tab = createBottomTabNavigator();

const Task41 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Task #(41+42)</Text>
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
  container:{flex: 1, height: 500,marginTop:10,margin:2,position:'relative'},
  center: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
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
   position:'relative',
   zIndex:0,
},
buttonOverlay: {
  position: 'absolute',
  bottom: 30,
  width: '90%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},




});

export default Task41;
