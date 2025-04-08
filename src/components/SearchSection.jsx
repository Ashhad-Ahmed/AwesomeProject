import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const SearchSection = () => {
    return (
        <View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#aaa"
                />
            </View>
            <TouchableOpacity style={styles.aiWorkoutButton}>
                <Text style={styles.aiWorkoutText}>Create AI Workout Plan</Text>
                <Image source={require('../assets/crown.png')} style={styles.crownIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default SearchSection;

const styles = StyleSheet.create({
    searchContainer: {
        marginHorizontal: 16,
        marginTop: 8,
    },
    searchInput: {
        backgroundColor: '#0c2d4a',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 10,
        color: '#fff',
    },
    aiWorkoutButton: {
        backgroundColor: '#007bff',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 16,
    },
    aiWorkoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    crownIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff',
    },
});