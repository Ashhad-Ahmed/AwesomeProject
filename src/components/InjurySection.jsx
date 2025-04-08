import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const InjurySection = ({ injuries }) => {
    return (
        <View>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Injury & Conditions</Text>
                <TouchableOpacity style={styles.toggleOn}>
                    <Text style={styles.toggleText}>...</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} showsHorizontalScrollIndicator={false}>
                {injuries.map((item) => (
                    <View key={item.id} style={styles.injuryCard}>
                        <Image source={item.image} style={styles.injuryImage} />
                        <Text style={styles.injuryText}>{item.title}</Text>
                        <TouchableOpacity style={styles.removeButton}>
                            <Text style={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default InjurySection;

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 12,
        marginBottom: 8,
        alignItems: 'center',
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    toggleOn: {
        backgroundColor: '#0c2d4a',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    toggleText: {
        color: '#4ade80',
        fontSize: 14,
        fontWeight: '600',
    },
    injuryScroll: {
        paddingLeft: 16,
    },
    injuryCard: {
        backgroundColor: '#0c2d4a',
        borderRadius: 16,
        padding: 16,
        marginRight: 12,
        alignItems: 'center',
        width: '45%', // Adjust width to fit two boxes per row
        marginBottom: 16, // Add margin to separate rows
    },
    injuryImage: {
        width: 40,
        height: 40,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    injuryText: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 8,
    },
    removeButton: {
        backgroundColor: '#2e70f9',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    removeText: {
        color: '#fff',
        fontSize: 12,
    },
});