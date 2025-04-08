import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const PopularWorkoutSection = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Popular Workout</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* Card 1 */}
                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image source={require('../assets/stairs.png')} style={styles.cardImage} />
                        <View style={styles.tagOverlay}>
                            <Text style={styles.tag}>Thighs</Text>
                            <Text style={styles.tag}>Legs</Text>
                        </View>
                    </View>
                    <Text style={styles.cardTitle}>Up and Down Stairs</Text>
                    <Text style={styles.cardDesc}>Train your thighs and legs</Text>
                </View>

                {/* Card 2 */}
                <View style={styles.card}>
                    <View style={styles.cardImageWrapper}>
                        <Image source={require('../assets/yoga.png')} style={styles.cardImage} />
                        <View style={styles.tagOverlay}>
                            <Text style={styles.tag}>Stomach</Text>
                            <Text style={styles.tag}>Hands</Text>
                        </View>
                    </View>
                    <Text style={styles.cardTitle}>Lifting Belly</Text>
                    <Text style={styles.cardDesc}>Shape your stomach to look...</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default PopularWorkoutSection;

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: '#05192d',
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    card: {
        width: 220,
        backgroundColor: '#0c2d4a',
        borderRadius: 14,
        marginRight: 16,
        padding: 10,
    },
    cardImageWrapper: {
        position: 'relative',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 8,
    },
    cardImage: {
        width: '100%',
        height: 110,
        borderRadius: 10,
    },
    tagOverlay: {
        position: 'absolute',
        top: 8,
        left: 8,
        flexDirection: 'row',
        gap: 6,
    },
    tag: {
        backgroundColor: '#4e6982',
        color: '#fff',
        fontSize: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 20,
        overflow: 'hidden',
    },
    cardTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    cardDesc: {
        color: '#ccc',
        fontSize: 13,
        marginTop: 2,
    },
});