import { useState } from 'react';
import { StyleSheet ,View,Text, TouchableOpacity} from 'react-native';
import MyFunctionalComponentTask21 from '../components/MyFunctionalComponent_Task21';

const Task21 = ()=>{
    const [isVisible,setIsVisible] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.text2}>Task #21</Text>
            <TouchableOpacity style={styles.button} onPress={()=>setIsVisible(!isVisible)}>
              <Text style={styles.text}>{isVisible ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
           {<View style={{ opacity: isVisible ? 1 : 0 }}>
     <MyFunctionalComponentTask21 />
 </View>}

        </View>
    );
};
const styles = StyleSheet.create({
     container:{flex:1,textAlign:'center',alignItems:'center',marginBottom:50},
     button:{backgroundColor:'#007AFF',padding:12,borderRadius:8},
     text:{color:'#fff',fontSize:18,padding:4,fontWeight:'bold'},
     text2: { fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold' },
    });
export default Task21;
