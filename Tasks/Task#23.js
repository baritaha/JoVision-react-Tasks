import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import MyClassPage_Task23 from '../components/MyClassPage_Task23';
const Task23 = ()=>{
    const [text,setText] = useState('Start Typing ...');
    return(
           <View style={styles.container}>
           <Text style={styles.text2}>Task #23</Text>
        <Text style={styles.textParent}>Parent Text Updated here: <Text style={styles.text}>{text}</Text></Text>
         <MyClassPage_Task23 parentUpdatedText={setText}/>
           </View>
    );
};
const styles=StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    text:{color:'red',fontSize:20},
     text2: { fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold' },
    textParent:{fontSize:20,marginBottom:20,fontWeight:'bold',color:'green'},
});
export default Task23;
