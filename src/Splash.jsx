import { View, Text, StyleSheet, Image, Button, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';

export default function Splash() {
    return (
        
        <View style={styles.parent}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <View style={styles.logoContainer}>
                <Image source={require('./assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Create a professional RESUME in minutes!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    parent: {
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'start',
        alignItems: 'center',
        paddingVertical: 70,
        paddingHorizontal: 0,
        gap: 80,
    },
    logo: {
        width: 120,
        height: 140,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 30,
        color: '#389BDB',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#389BDB',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius:10,
    },
    btntext:{
        color: 'white',
        fontSize: 20,
    }

    // container: {
    //     height: '100%',
    //     // flex: 1,
    //     backgroundColor: 'white',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // logo: {
    //     marginTop: -228,
    //     marginRight: 20,
    //     width: 120,
    //     height: 140,
    //     resizeMode: 'contain',
    //     marginBottom: 80,
    // },
    // textContainer: {
    //     alignItems: 'center', // Center text horizontally
    //     justifyContent: 'center', // Center text vertically if needed
    // },
    // text: {
    //     marginTop: 20,
    //     fontSize: 30,
    //     color: '#389BDB',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    // },
});
