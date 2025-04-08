import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const CategorySection = ({ categories }) => {
    return (
        <View>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Category</Text>
                <TouchableOpacity style={styles.toggleOn}>
                    <Text style={styles.toggleText}>...</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                {categories.map((cat) => (
                    <View key={cat.id} style={styles.categoryCard}>
                        <Image source={cat.image} style={styles.categoryImage} />
                        <View style={styles.categoryOverlay}>
                            <Text style={styles.categoryText}>{cat.title}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default CategorySection;

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
    categoryScroll: {
        paddingLeft: 16,
        marginBottom: 40,
    },
    categoryCard: {
        width: 100,
        height: 120,
        borderRadius: 16,
        overflow: 'hidden',
        marginRight: 12,
    },
    categoryImage: {
        width: '100%',
        height: '100%',
    },
    categoryOverlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 6,
        alignItems: 'center',
    },
    categoryText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
});