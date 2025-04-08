import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

export default function CoverLetter() {
    return (
        <SafeAreaView>
        <View style={styles.parent}>

            <View style={styles.mainContainer}>
                <View>
                    <Text style={styles.text}>What role are you applying for? </Text>
                    <Text style={styles.textt}> We'll tailor your cover letter to fit this role</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.title}> Job Title </Text>
                    <TextInput style={styles.input} placeholder='e.g. Software Engineer' placeholderTextColor={'#ccc'}></TextInput>
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
        fontSize: 22,
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
        gap: 40,
    }


}