import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WorkoutActivitySection = () => {
    return (
        <View style={styles.activityContainer}>
            <Text style={styles.activityTitle}>Your Workout Activity</Text>
            <View style={styles.activityContent}>
                <View style={styles.caloriesBox}>
                    <Image source={require('../assets/weights.png')} style={styles.caloriesIcon} />
                    <Text style={styles.caloriesCount}>12345</Text>
                    <Text style={styles.caloriesLabel}>Calories Burnt</Text>
                </View>
            </View>
        </View>
    );
};

export default WorkoutActivitySection;

const styles = StyleSheet.create({
    activityContainer: {
        padding: 16,
        marginTop: 12,
        backgroundColor: '#0c2d4a',
        borderRadius: 16,
        marginHorizontal: 16,
        marginBottom: 40,
    },
    activityTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    activityContent: {
        flexDirection: 'row',
        gap: 12,
    },
    caloriesBox: {
        width: 100,
        backgroundColor: '#05192d',
        alignItems: 'center',
        padding: 12,
        borderRadius: 12,
    },
    caloriesIcon: {
        width: 32,
        height: 32,
        marginBottom: 8,
        tintColor: '#fff',
    },
    caloriesCount: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    caloriesLabel: {
        color: '#ccc',
        fontSize: 12,
        textAlign: 'center',
    },
});