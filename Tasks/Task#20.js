import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MyClassPage_Task20 from '../components/MyClassPage_Task20';


const Task20 = () =>{
    const [isVisible , setIsVisible] = useState(false);
    return(
        <View style={styles.contianer}>
            <Text style={styles.text2}>Task #20</Text>
            <TouchableOpacity style={styles.button} onPress = { () => setIsVisible(!isVisible)}>
           <Text style={styles.text}>{isVisible ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
            {isVisible && <MyClassPage_Task20/>}
        </View>
    );
};
const styles = StyleSheet.create({
    contianer:{flex:1,textAlign:'center',alignItems:'center',marginBottom:15},
    button:{backgroundColor:'#007AFF',padding:12,borderRadius:8},
    text:{color:'#fff',fontSize:18,padding:4,fontWeight:'bold'},
     text2: { fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold' },
});

export default Task20;
