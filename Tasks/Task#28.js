import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Alert } from 'react-native';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { images } from '../assets/imagesArray/arraysOfimages';
import { useEffect } from 'react';
import { useRef } from 'react';

const Task28 = ()=>{
    const [selectedImage, setSelectedImage] = useState(0);
    const flatListRef = useRef(null);
    const handleImagePress = (index) => {
        Alert.alert(`You have selected image : ${index}`);
        setSelectedImage(index);
        // if (flatListRef.current) {
        //     flatListRef.current.scrollToIndex({ index});
        // }
    };
    useEffect(() => {
        if (selectedImage !== null && flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: selectedImage, animated: true });
        }
    }, [selectedImage]);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Task #28</Text>
            <FlatList
                ref={flatListRef}
                data={images}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => handleImagePress(index)}>
                    <Text style={styles.text2}>{item.label}</Text>
                        <Image source={item.src}   style={[
                styles.image,
                selectedImage === index ? styles.style1 : styles.style2]}
                />
                    </Pressable>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    image: {
        width: screenWidth * 0.5,
        height: screenHeight * 0.3,
        resizeMode: 'contain',
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        margin:10,
    },
    text: {
        fontSize: 18,
        margin: 10,
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
    },
       text2: {
        fontSize: 18,
        margin: 10,
        color: 'white',
        padding: 10,
        borderRadius: 5,
       backgroundColor: 'chocolate',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    style1:{
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        transform: [{ scaleY: 1.06 }],
        transition: {
            duration: 300,
        },
    },
    style2:{
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
    },
});
export default Task28;
