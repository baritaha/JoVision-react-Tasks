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
    const [imageArray, setImageArray] = useState(images);
    const flatListRef = useRef(null);
    const handleImagePress = (index) => {
        Alert.alert(`You have selected image : ${index}`);
        setSelectedImage(index);
        console.log('imageArray', imageArray);
        // if (flatListRef.current) {
        //     flatListRef.current.scrollToIndex({ index});
        // }
    };
    useEffect(() => {
        if (selectedImage !== null && flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: selectedImage, animated: true });
        }
    }, [selectedImage]);
    const handleDelete = (index) => {
        const deleteImage = imageArray.find((item) => item.index === index);
        if (!deleteImage) {
            Alert.alert(`Image #${index + 1} not found.`);
            return;
        }
        Alert.alert(
            'Delete Image',
            `Are you sure you want to delete ${deleteImage.label} Image ?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        const newImages = imageArray.filter((item) => item.index !== index);
                        setImageArray(newImages);
                        Alert.alert(`Image ${deleteImage.label} deleted.`);
                        //reset index
                        setSelectedImage(0);
                    },
                },
            ],
            { cancelable: true }
        );
    };
    // Function to handle duplication of an image
  const handleDuplicate = (index) => {
    const duplicateImage = imageArray.find((item) => item.index === index);
    if (!duplicateImage) {
        Alert.alert(`Image #${index + 1} not found.`);
        return;
    }

    // Create a new image object with a unique index
    const newImage = { ...duplicateImage, index: Date.now(), label: `${duplicateImage.label} (Copy)` };

    // Find the position of the original image and insert the duplicate next to it
    const newImages = [...imageArray];
    const originalIndex = newImages.findIndex(item => item.index === index);
    newImages.splice(originalIndex + 1, 0, newImage); // Insert the new image at index + 1
    setImageArray(newImages);
    Alert.alert(`Image ${duplicateImage.label} duplicated.`);
};

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Task #28</Text>
            <FlatList
                ref={flatListRef}
                data={imageArray}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => handleImagePress(index)}>
                        <View>
                           <Text style={styles.text2}>
                             {item.label}
                           </Text>
                        </View>
                        <Image source={item.src}   style={[
                           styles.image,
                           selectedImage === index ? styles.style1 : styles.style2]}
                           />
                           <Pressable onPress={() => handleDuplicate(item.index)} style={styles.duplicateButton}>
                                 <Text style={styles.textDuplicateButton}>Duplicate</Text>
                               </Pressable>
                              <Pressable onPress={() => handleDelete(item.index)} style={styles.deleteButton}>
                                 <Text style={styles.textDeleteButton}>Delete</Text>
                               </Pressable>
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
        borderWidth: 4,
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
    deleteButton: {position:'absolute',left:125,bottom:25, backgroundColor: 'red', paddingInline: 15,paddingBlock:5,textShadowColor:'blue', borderRadius: 5, zIndex: 1, fontWeight: 'bold' },
    textDeleteButton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    duplicateButton: {position:'absolute',left:15,bottom:25, backgroundColor: 'green', paddingInline: 15,paddingBlock:5,textShadowColor:'blue', borderRadius: 5, zIndex: 1, fontWeight: 'bold' },
    textDuplicateButton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});
export default Task28;
