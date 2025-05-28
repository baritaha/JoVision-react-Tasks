import { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
class MyClassPage_Task23 extends Component{
render(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="type text ..." onChangeText={this.props.parentUpdatedText}/>
        </View>
    );
}
}
const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
     input:{padding:10,fontSize:18,borderWidth:2,borderColor:'aqua',width:'100%',borderRadius:5},
});
export default MyClassPage_Task23;
