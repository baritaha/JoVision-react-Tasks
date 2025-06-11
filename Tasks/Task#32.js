import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Platform, Dimensions } from 'react-native';
import Video from 'react-native-video';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Task32 = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const [showPoster, setShowPoster] = useState(true);

  // Using a free test video URL that works on Android
  const videoSource = {
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  };
// Local video source for Android
// const localVideoSource = {
//   uri: require('../assets/video/v2.mp4'),
//   type: 'mp4',
// };
//  const videoSourceLocal = Platform.select({
//   android: {
//     uri: '../android/app/src/main/assets/video/waves.mp4',
//     type: 'mp4',
//   },
//  });
  //poster image
  const posterSource = require('../assets/images/reactPoster.png');

  const togglePlayPause = () => {
   setPaused(!paused);
   setShowPoster(!showPoster);
  };

  const onEnd = () => {
    setPaused(true);
    setShowPoster(true);
  };

  return (
    <View style={styles.container}>
        <View style={styles.textTitle}>
            <Text style={styles.text2}>Task #32 - Video Player</Text>
        </View>
      <TouchableOpacity
        onPress={togglePlayPause}
        style={styles.videoContainer}
        activeOpacity={0.7}
      >
        {/* Poster image */}
        {showPoster && (
          <Image source={posterSource} style={styles.poster} />
        )}
        {/* Video component */}
        <Video
          ref={videoRef}
          source={videoSource}
          onError={(error) => console.log('Video Error:', error)}
          style={styles.video}
          paused={paused}
          resizeMode="cover"
          poster={posterSource}
          posterResizeMode="cover"
          onEnd={onEnd}
          bufferConfig={{
            minBufferMs: 15000,
            maxBufferMs: 30000,
            bufferForPlaybackMs: 2500,
            bufferForPlaybackAfterRebufferMs: 5000,
          }}
        />
        {/* Play/Pause overlay controls */}
        {!paused && (
          <View style={styles.controlsOverlay}>
            <Text style={styles.controlText}>⏸</Text>
          </View>
        )}
        {paused && (
          <View style={styles.controlsOverlay}>
            <Text style={styles.controlText}>▶</Text>
          </View>
        )}
      </TouchableOpacity>
      {/* Android-specific status text */}
      <Text style={styles.androidStatus}>
        {paused ? 'Paused' : 'Playing'} - Android
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    alignItems: 'center',
    position: 'relative',
    top:70,
    minHeight:300,
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  poster: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
    zIndex:1,
  },
  controlsOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  controlText: {
    fontSize: 40,
    color: 'white',
    bottom:-137,
    left:-160,
  },
  androidStatus: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
   text2: {fontSize: 18, margin: 10, backgroundColor: 'lightblue',
     padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold',
      marginTop:0,
    },
    textTitle: {
      position: 'absolute',
        top: -50,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
});

export default Task32;
