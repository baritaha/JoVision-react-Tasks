import { useRef, useState } from 'react';
import { Alert, Animated, Button, FlatList, Image, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { images } from '../assets/imagesArray/arraysOfimages';


const Task29 = ()=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [indexImage, setIndexImage] = useState(null);
   const flatListRef = useRef(null);
  const [isOnPressed, setIsOnPressed] = useState(false);
  const [imageArray, setImageArray] = useState(images);
    const scrollToIndex = () => {
        console.log('image array', imageArray);
      setIsOnPressed(true);
      console.log('indexImage', indexImage);
    const index = parseInt(indexImage, 10);
    console.log('index', index);
    if (!isNaN(index) && index >= 0 && index < imageArray.length) {
      flatListRef.current?.scrollToIndex({ animated: true, index });
    // setIndexImage(index);
   // setIndexImage('');
        Alert.alert(`Scrolled to Image #${index}`);
        setModalVisible(false);
    }
    else{
        Alert.alert('Invalid Index', `Please enter a valid index between 0 and ${images.length - 1}.`);
    }
   //setIsOnPressed(false);
  };
      const handleDelete = (index) => {
        const deletedImage = imageArray.find((item)=>item.index === index);
          if (!deletedImage) {
              Alert.alert(`Image #${index + 1} not found.`);
              return;
          }
          Alert.alert(
              'Delete Image',
              `Are you sure you want to delete ${deletedImage.label} Image ?`,
              [
                  {
                      text: 'Cancel',
                      style: 'cancel',
                  },
                  {
                      text: 'Delete',
                      onPress: () => {
                          const newImages = imageArray.filter((item) => item.index !== index);
                          console.log(newImages);
                          setImageArray(newImages);
                          Alert.alert(`Image ${deletedImage.label} deleted.`);
                          setIsOnPressed(false); setIndexImage('');
                          //reset index
                          setIndexImage(0);
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
    return(
        <View style={styles.container}>
            <Text style={styles.text2}>Task #29</Text>
            <FlatList
            ref={flatListRef}
            data={imageArray}
            horizontal
            keyExtractor={(item) => item.index.toString()}
            renderItem={({item,index}) =>
                <View style={parseInt(indexImage, 10) === index && isOnPressed ? styles.style1 : styles.style2}>
                    <View>
                         <Text style={styles.text}>
                        {item.label}
                         {parseInt(indexImage,10) === index && isOnPressed && <Image source={require('../assets/images/check.png')} style={styles.icon} />}
                        </Text>
                            <Pressable onPress={() => handleDelete(item.index)} style={styles.deleteButton}>
                               <Image source={require('../assets/images/icons8-delete-48.png')} style={styles.iconDelete} />
                            </Pressable>
                              <Pressable onPress={() => handleDuplicate(item.index)} style={styles.duplicateButton}>
                               <Image source={require('../assets/images/add.png')} style={styles.iconDuplicate} />
                            </Pressable>
                    </View>
                    <Image source={item.src} style={styles.image}/>
               </View>
            }
            />
            <Button title="Open Modal" onPress={()=>{setModalVisible(true); setIsOnPressed(false); setIndexImage('');}}/>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={()=>setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                       <Text style={styles.modalTitle}>Enter Index to scroll image</Text>
                       <TextInput style={styles.input} placeholder="Type Index ..."
                       value={indexImage} onChangeText={setIndexImage}/>
                       <Text style={styles.text}>Enter index from 0 to {images.length - 1}</Text>
                       <View style={styles.btnGroup}>
                        <Button title="Close Modal" onPress={()=>setModalVisible(false)}/>
                        <TouchableOpacity style={styles.button} onPress={scrollToIndex}>
                         <Text style={styles.textScroll}>Scroll to Index</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Modal>
        </View>
    );
};
const styles = {
    container:{flex:1, justifyContent:'center', alignItems:'center'},
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent:{
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    text:{fontSize:20, fontWeight:'bold',justifyContent:'center',textAlign:'center',margin:10,
        marginBottom:-10,backgroundColor:'aqua',padding:20,color:'black',borderTopLeftRadius:15,
        borderTopRightRadius:15},
    text2: {fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold'},
    btnGroup:{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20, paddingHorizontal: 20},
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    image:{ width: 245, height: 270, margin: 10,borderBottomLeftRadius:15, borderBottomRightRadius:15},
    style1:{
          margin:20,
        borderWidth: 4,
        borderColor: 'green',
        borderRadius: 10,
        transform:[{ scaleY: 1.09 }],
        transition: {
            duration: 600,
        },
    },
    style2:{
        margin:20,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
    },
    textScroll:{color:'white', fontWeight:'bold'},
  icon: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
    iconDelete: {
        width: 25,
        height: 25,
        position: 'absolute',
        left:12,
        bottom: 30,
    },
    iconDuplicate: {
        width: 25,
        height: 25,
    },
    duplicateButton: {
        position: 'absolute',
        left: 0,
        top:45,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        zIndex: 1,
        fontWeight: 'bold',
    },
    };
export default Task29;
