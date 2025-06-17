import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task35 = ()=>{
const [name,setName] = useState();
const [age,setAge] = useState();
const [country,setCountry] = useState();
const [error,setError] = useState('');


useEffect(()=>{
    const getDataLocalStorage = async () =>{
        try {
                const dataStorage = await AsyncStorage.getItem('userData');
               if(dataStorage !== null){
                const parsedData = JSON.parse(dataStorage);
                const savedTime = new Date(parsedData.timestamp);
                const timeNow = new Date();
                if(timeNow - savedTime < 60000){
                    setName(parsedData.name);
                    setAge(parsedData.age);
                    setCountry(parsedData.country);
                }
               }
        } catch (er) {
            setError(er);
            console.log(`you have more than i minute in the app ${er}`);
        }
    };
    getDataLocalStorage();
},[]);
const handleSubmition = async ()=>{
    const dataObject = {
        name:name,
        age:age,
        country:country,
        timestamp: new Date().toISOString(),
    };
    try {
        await AsyncStorage.setItem('userData', JSON.stringify(dataObject));
      Alert.alert(
        'data store successfully\ndata submition :',
        `Name : ${dataObject.name}\nAge : ${dataObject.age}\ncountry : ${dataObject.country}\nTimestamp : ${dataObject.timestamp}`,
        [{text:'OK'}]
    );
    } catch (err) {
        Alert.alert(`Error , Error Saving Data : ${err.message}`);
    }
};
    return(
    <View style={styles.container}>
            <Text style={styles.heading}>Task #35</Text>
      <View style={styles.inputContainer}>
            <TextInput placeholder="enter name ..." style={styles.inputText} value={name}
            onChangeText={setName}/>
            <TextInput placeholder="enter age ..." style={styles.inputText} value={age}
            onChangeText={setAge} />
            <TextInput placeholder="enter countery ..." style={styles.inputText} value={country}
            onChangeText={setCountry}/>
            <TouchableOpacity style={styles.button} onPress={handleSubmition}>
                <Text style={styles.buttonText}>submit</Text>
            </TouchableOpacity>
      </View>
    </View>
    );
};
const styles = StyleSheet.create({
    container:{flex:1,alignItems:'center'},
    text:{color:'red',fontSize:20},
    heading: {fontSize: 18, margin: 10, backgroundColor: 'lightblue',
     padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold',
      marginTop:0,
    },
    inputContainer:{
     width:350,
     alignItems:'center',
     padding:25,
     borderRadius:21,
     backgroundColor:'#A1C4FD',
    },
    button:{padding:5,backgroundColor:'lightgreen',textAlign:'center',
        alignItems:'center',borderRadius:5,width:200,margin:7},
    inputText:{padding:7,backgroundColor:'#e6e6e6',color:'blue',
        width:'100%',marginBottom:8,fontSize:18,borderRadius:5,fontFamily:'monospace'},
    buttonText:{fontWeight:'bold',fontSize:20,color:'white'},
});
export default Task35;
