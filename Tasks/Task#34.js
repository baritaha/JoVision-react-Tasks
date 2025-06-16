import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import useCurrentTimeTask34 from '../hooks/useCurrentTime_Task34';
import { useEffect, useRef, useState } from 'react';

const Clock = ({fadeAnim }) => {
    const currentTime = useCurrentTimeTask34();
      useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
  }).start();
  }, [fadeAnim]);
    const day = currentTime.getDate();
    const month = currentTime.getMonth() + 1;
    const year = currentTime.getFullYear();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();
    const AM_PM = ()=>{
        if(hour >= 12){
          return 'PM';
        }
            else{
            return 'AM';
            }
        };
    const dateStr = `${month}/${day}/${year}`;

    const timeStr = `${hour}/${minute}/${second} ${AM_PM()}`;
    return(
        <Animated.View style={[styles.timeBox ,{opacity:fadeAnim}]}>
              <Text style={styles.timeText}>{timeStr}</Text>
                <Text style={styles.timeText}>{dateStr}</Text>
        </Animated.View>
    );
};
const Task34 = ()=>{
 const [showClock,setShowClock] = useState(true);
 const fadeAnim = useRef(new Animated.Value(0)).current;

const toggleClock = () => {
  if (!showClock) {
    Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }).start();
    setShowClock(true);
  } else {
    Animated.timing(fadeAnim, { toValue: 0, duration: 1000, useNativeDriver: true }).start(() => setShowClock(false));
  }
};

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Task #34</Text>
                <Button style={styles.button} title={showClock ? 'Hide Clock' : ' Show Clock'}
                onPress={()=>toggleClock()}
                />
                {showClock && <Clock fadeAnim={fadeAnim}/>}
            </View>
        );
};
const styles = StyleSheet.create({
    timeBox:{alignItems:'center',marginTop:10,backgroundColor:'#FFFDD0', padding:15,borderRadius:7},
    container:{flex:1,alignItems:'center',minHeight:350 ,marginTop:20,backgroundColor:'#fff1d0'},
    task:{color:'blue',fontSize:20},
    text:{color:'red',fontSize:30},
   heading: {fontSize: 18, margin: 10, backgroundColor: 'lightblue',
     padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold',
      marginTop:0,
    },
    timeText:{fontSize:32,fontWeight:600,color:'#ffc338',
      backgroundColor:'black',width:'100%',margin:10,
      padding:20,borderRadius:20,minWidth:250,justifyContent:'center',textAlign:'center'},
    button:{marginBottom:20},
});
export default Task34;
