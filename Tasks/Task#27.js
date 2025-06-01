import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View,Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Task27 = ()=>{
    const images = {
        Angular: { src : require('../assets/images/angularIcon.png'), lable:'Angular Framework'},
        React: { src :require('../assets/images/reactIcon.png'),lable:'react-native'},
        Vue_js: {src:require('../assets/images/vueJsIcon.png'), lable:'Vue js3'},
    };
    const [selectImage,setSellectImage] = useState(images.Angular);

   const chooseImage = ()=>{
        Alert.alert(
            'Choose Image',
            'Select an image from the options below:',
            [
                {
                    text: 'Angular',
                    onPress: () =>setSellectImage(images.Angular),

                },
                 {
                    text: 'React',
                    onPress: () =>setSellectImage(images.React),

                },
                 {
                    text: 'Vue_js',
                    onPress: () =>setSellectImage(images.Vue_js),

                },
            ],
            {cancelable:true}
        );
            console.log(selectImage);
    };
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Task #27</Text>
            <View>
                 <Image source={selectImage.src} style={styles.image}/>
                 <Text style={styles.textLable}>{selectImage.lable}</Text>
                 <Button title="choose image" onPress={chooseImage}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center', alignItems:'center',textAlign:'center'},
     image: {
        width: screenWidth * 0.8,
        height: screenHeight * 0.4,
        resizeMode: 'contain',
    },
    text:{ fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold' },
    textLable:{fontSize:24,fontWeight:'bold',color:'white',backgroundColor:'chocolate',textAlign:'center',borderRadius:5,padding:10,marginBottom:5,minWidth:300}
});
export default Task27;
