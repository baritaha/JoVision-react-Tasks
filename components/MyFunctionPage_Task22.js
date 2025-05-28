import { StyleSheet, TextInput, View } from 'react-native';
const MyFunctionalComponentTask22 = (props)=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.input}
             placeholder="Type Text..." onChangeText={text => props.parentUpdatedText(text)}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
     input: {
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
    fontSize: 18,
  },
});
export default MyFunctionalComponentTask22;
