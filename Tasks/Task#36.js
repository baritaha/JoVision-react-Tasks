// Task36.js
import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const generateRandomWord = (length) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const Task36 = () => {
  const randomWords = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    word: generateRandomWord(8 + Math.floor(Math.random() * 5)), // words 8–12 letters
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task #36 - Scrollable Words</Text>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
        {randomWords.map(({ id, word }) => (
          <Text key={id} style={styles.wordText}>
            #{id}: {word}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    alignItems:'center',
    marginTop: 30,
  },
heading: {fontSize: 18, margin: 10, backgroundColor: 'lightblue',
     padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold',
      marginTop:0,
    },
 scrollView: {
  marginTop:10,
  width:'100%',
  maxWidth:'70%',
  padding: 10,
  maxHeight: 330,
  marginRight: 35,
  backgroundColor: 'skyblue',
  borderRadius: 6,
  paddingHorizontal: 19,
},

  wordText: {
    fontSize: 20,
    marginVertical: 8,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 6,
    color:'chocolate',
    fontWeight:'bold',
  },
});

export default Task36;
