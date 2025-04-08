import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HealthyLifeSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Healthy life belongs to everyone</Text>
                <TouchableOpacity style={styles.planButton}>
                    <Text style={styles.planButtonText}>Today’s Plan</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/healthy.png')} style={styles.image} />
        </View>
    );
};

export default HealthyLifeSection;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#102b46',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    planButton: {
        backgroundColor: '#2e70f9',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    planButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
});