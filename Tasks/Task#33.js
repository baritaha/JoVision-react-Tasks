import React, { useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';

const Task33 = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const [showIcon, setShowIcon] = useState(true);

  const togglePlayPause = () => {
  setPaused(!paused);
  setShowIcon(!showIcon);
  };
const onEnd=()=>{
  setShowIcon(true);
  setPaused(true);
};
  const videoSource = require('../assets/video/v2.mp4');
  const imagePoster = require('../assets/images/roboot.png');

  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Task #33</Text>
      <TouchableOpacity style={styles.overlay} onPress={togglePlayPause} activeOpacity={1}>
        <Video
          ref={videoRef}
          source={videoSource}
          paused={paused}
          resizeMode="contain"
          controls={false}
          poster={Image.resolveAssetSource(imagePoster).uri}
          posterResizeMode="cover"
          style={styles.video}
          onEnd={onEnd}
        />
        {
          showIcon && paused && (
            <Image source={imagePoster} style={styles.image}/>
          )
        }
      </TouchableOpacity>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000',justifyContent:'center',alignItems:'center',marginTop:100 },
  overlay: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  video: { width: width, height: 250, margin: 10, borderWidth: 1,position:'relative' },
  text2: {
    fontSize: 18,
    margin: 10,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 0,
  },
  image:{width:width,maxHeight:'270',position:'absolute',resizeMode:'contain'},
});

export default Task33;
