import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

const Task26 = () => {
    const [ip, setIp] = useState('Press a button to get your IP');
    const [isLoading, setIsLoading] = useState(false);

    const fetchIPAsync = async () => {//blocking => feazing data until the respose come
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            setIp(`Your IP: ${data.ip}`);
        } catch (error) {
            setIp('Error fetching IP');
        }
    };

    const fetchIPBlocking = async () => {//Non-Blocking => app keeps working normally while fetching the data in the background.
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            setIp(`Your IP: ${data.ip}`);
        } catch (error) {
            setIp('Error fetching IP');
        }
        setIsLoading(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text2}>Task #26</Text>
            <Text style={styles.ipText}>{ip}</Text>
            <TouchableOpacity style={styles.button} onPress={fetchIPAsync}>
                <Text style={styles.buttonText}>Get IP (Non-blocking)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={fetchIPBlocking} disabled={isLoading}>
                <Text style={styles.buttonText}>Get IP (Blocking)</Text>
            </TouchableOpacity>
            {isLoading && <ActivityIndicator size="large" color="#007AFF" />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center',minHeight:250,marginTop:0 },
    ipText: { fontSize: 18, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
    button: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8, marginVertical: 10 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
      text2: { fontSize: 18, margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 5, width: '100%', textAlign: 'center',fontWeight: 'bold' },
});

export default Task26;
