import { Component } from 'react';
import { StyleSheet, View ,Text} from 'react-native';


class MyClassPage_Task25 extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayText:'initial value',
        };
    }
    updateText = (newText)=>{
        this.setState({displayText:newText});
    };

    render(){
        return(
            <View style={styles.container}>
        <Text style={styles.text}>Class Component Display:</Text>
        <Text style={styles.displayText}>{this.state.displayText}</Text>
      </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    margin: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  displayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});
export default MyClassPage_Task25;