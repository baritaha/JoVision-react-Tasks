import { useState } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import MyFunctionalComponentTask22 from '../components/MyFunctionPage_Task22';
const Task22 = ()=>{
    const [text,setText] = useState('Start Typing ...');
    return(
        <View style={styles.container}>
            <Text style={styles.text2}>Task #22</Text>
           <Text style={styles.textParent}>Parent Text Updated here: <Text style={styles.text}>{text}</Text></Text>
            <MyFunctionalComponentTask22 parentUpdatedText={setText}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    text:{fontSize:20,marginBottom:20,fontWeight:'bold',color:'blue'},
     text2: { fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold' },
    textParent:{fontSize:20,marginBottom:20,fontWeight:'bold',color:'green'},
    });
export default Task22;
