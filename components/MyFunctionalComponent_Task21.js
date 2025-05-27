import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MyFunctionalComponentTask21 = ()=>{
    useEffect(()=>{
        console.log('useEffect Hook is called');
    return()=>{
        console.log('useEffect Hook is unmounted');
    };
    }
    ,[]);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>this <Text  style={styles.innnerText}>functional component</Text>  Print in console <Text style={styles.innnerText}>Mounting OR Unmounting</Text>  life cycle </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',textAlign:'center'},
   text:{fontSize:24,fontWeight:'bold',alignItems:'center',textAlign:'center'},
   innnerText:{color:'green',fontWeight:'bold',textDecorationLine:'underline'},
});
export default MyFunctionalComponentTask21;
