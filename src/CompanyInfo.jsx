import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

export default function CoverLetter() {
    return (
        <SafeAreaView>
        <View style={styles.parent}>

            <View style={styles.mainContainer}>
                <View>
                    <Text style={styles.text}>Company Info </Text>
                    <Text style={styles.textt}> Do you have any company in mind?</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.title}> Company Name </Text>
                    <TextInput style={styles.input}></TextInput> 
                    <Text style={styles.title}> Company Address </Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
            </View>

            <View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btntext}>Next</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.btntext2}>Skip</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
        </SafeAreaView>
    )
}
const styles = {
    text: {
        fontSize: 40,
        color: '#389BDB',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        
        marginRight: 250,
        fontSize: 13,
        color: 'black',
        width: 100,
    },
    btntext: {
        marginLeft: 35,
        color: 'white',
        fontSize: 20,
    },
    textt: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'light',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#389BDB',
        paddingVertical: 10,
        paddingHorizontal: 110,
        borderRadius: 100,
    },
    parent: {
        height: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'space-between',
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        color: 'black',
        backgroundColor: 'white',
    },
    button2: {
        // backgroundColor: '#389BDB',
        paddingVertical: 10,
        paddingHorizontal: 110,
        borderRadius: 100,
    },
    btntext2: {
        marginLeft: 40,
        color: 'black',
        fontSize: 20,
    },
    mainContainer:{
        gap: 80,
    },
    inputContainer: {
        gap: 10,
    },


}