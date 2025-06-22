// Task36.js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, View, RefreshControl } from 'react-native';

const generateRandomWord = (length) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
const generateWords = () => {
  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    word: generateRandomWord(8 + Math.floor(Math.random() * 5)),
  }));
};

const Task36 = () => {
  const [randomWords,setRandomWords] = useState(generateWords());
  const [refresh,setRefreshing] = useState(false);

  const onRefresh = React.useCallback(()=>{
    console.log(refresh);
    setRefreshing(true);
    setTimeout(() => {
      setRandomWords(generateWords());
      setRefreshing(true);
    }, 2000);
  },[refresh]);
  // useEffect(() => {
  //   console.log(refresh);
  // }, [refresh]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task #36/37 - Scrollable Words</Text>
      <Text style={styles.textTitle}>Pull down to see RefreshControl indicator</Text>
     <View style={styles.scrollWrapper}>
       <ScrollView style={styles.scrollView}
         refreshControl={
         <RefreshControl refreshing={refresh} onRefresh={onRefresh}/>
      }
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}
       nestedScrollEnabled={true}
      >
      {randomWords.map(({ id, word }) => (
      <Text key={id} style={styles.wordText}>
        #{id}: {word}
      </Text>
    ))}
      </ScrollView>
    </View>
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
  maxWidth:'100%',
  padding: 10,
  maxHeight: 380,
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
  scrollWrapper: {
  width: '100%',
  maxWidth: '70%',
  marginRight: 35,
  backgroundColor: 'skyblue',
  borderRadius: 6,
  },
  textTitle:{fontSize:18,color:'blue',fontWeight:'bold',marginBottom:10},
});
export default Task36;
