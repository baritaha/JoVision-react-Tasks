import { useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MyClassPage_Task24 from '../components/MyFunctionPage_Task#24';

const Task24 = ()=>{
    const functionRef = useRef(null);
    const handleTextChange = (text)=>{
        if(functionRef.current){
            functionRef.current.updateText(text);
        }
    };
    return(
        <View style={styles.container}>
            <Text style={styles.text2}>Task #24</Text>
            <TextInput style={styles.input} placeholder="type here ..." onChangeText={handleTextChange}/>
            <MyClassPage_Task24 ref={functionRef}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
       input: {
 
    padding: 10,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
    fontSize: 18,
  },
   text2: { fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold' },

});
export default Task24;
