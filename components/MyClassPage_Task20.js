import { Component } from 'react';
import { Text, View , StyleSheet  } from 'react-native';


class MyClassPage_Task20 extends Component{
    componentDidMount(){
        console.log('MyClassPage_Task20 component mounted');
    }
    componentWillUnmount(){
        console.log('MyClassPage_Task20 component will unmount');
    }
    render(){
        return(
            <View style={styles.contianer}>
                <Text style={styles.text}>this component Print in console <Text style={{color:'green'}}>Mounting OR Unmounting</Text>  life cycle </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contianer:{flex:1,textAlign:'center',alignItems:'center'},
    text:{fontSize:24,fontWeight:'bold',alignItems:'center',textAlign:'center'},
});
export default MyClassPage_Task20;
