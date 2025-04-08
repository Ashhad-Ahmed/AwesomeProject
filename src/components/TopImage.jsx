import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const TopImageSection = () => {
    return (
        <ImageBackground
            source={require('../assets/bgimage.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <LinearGradient
                colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}
                style={styles.overlay}
            >
                <View style={styles.topRow}>
                    <Image source={require('../assets/profile.png')} style={styles.profileImage} />
                    <View style={styles.icons}>
                        <Icon name="chatbubble-ellipses-outline" size={22} color="#fff" style={styles.icon} />
                        <Icon name="notifications-outline" size={22} color="#fff" />
                    </View>
                </View>

                <View style={styles.greetingContainer}>
                    <Text style={styles.greeting}>Hi, Aimal !</Text>
                    <Text style={styles.question}>
                        Have you{'\n'}<Text style={{ fontWeight: 'bold' }}>exercised today?</Text>
                    </Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>89</Text>
                        <Text style={styles.statLabel}>Kg</Text>
                        <Text style={styles.statTitle}>Weight</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>169</Text>
                        <Text style={styles.statLabel}>Cm</Text>
                        <Text style={styles.statTitle}>Height</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>153</Text>
                        <Text style={styles.statLabel}>min</Text>
                        <Text style={styles.statTitle}>Workout</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>45</Text>
                        <Text style={styles.statLabel}>%</Text>
                        <Text style={styles.statTitle}>Cal Burnt</Text>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

export default TopImageSection;

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: 350,
    },
    overlay: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    icons: {
        flexDirection: 'row',
        gap: 12,
    },
    icon: {
        marginRight: 8,
    },
    greetingContainer: {
        marginTop: 20,
    },
    greeting: {
        color: '#fff',
        fontSize: 16,
    },
    question: {
        color: '#fff',
        fontSize: 22,
        lineHeight: 30,
    },
    statsContainer: {
        backgroundColor: '#0c2d4a',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
    },
    statBox: {
        alignItems: 'center',
    },
    statValue: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        color: '#ccc',
        fontSize: 12,
    },
    statTitle: {
        color: '#fff',
        fontSize: 14,
        marginTop: 4,
    },
});