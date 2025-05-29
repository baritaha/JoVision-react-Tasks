import { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyClassPage_Task24 = forwardRef((props,ref)=>{
    const [displayText,setDisplayText] = useState('start Typing ...');
    useImperativeHandle(ref , ()=> ({
        updateText(newText){
            setDisplayText(newText);
        },
    }));
    return(
        <View style={styles.container}>
            <Text style={styles.textParent}>Child Text Updated here:</Text>
             <Text style={styles.text}>{displayText}</Text>
        </View>
    );
});
const styles = StyleSheet.create({
    container:{flex:1,alignItems:'center',marginTop:20},
    text:{fontSize:18,padding:10,color:'aqua',fontWeight:'bold',textAlign:'center',width:'100%'},
     textParent:{fontSize:20,fontWeight:'bold',color:'green'},
});
export default MyClassPage_Task24;
