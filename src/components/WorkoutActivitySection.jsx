import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WorkoutActivitySection = () => {
    return (
        <View style={styles.activityContainer}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <Image
                        style={styles.crownIcon}
                        source={require('../assets/crown.png')}
                    />
                    <Text style={styles.activityTitle}>Your Workout Activity</Text>
                </View>
                <View style={styles.menuButton}>
                    <Text style={styles.menuDots}>•••</Text>
                </View>
            </View>

            <View style={styles.activityContent}>
                <View style={styles.caloriesBox}>
                    <View style={styles.dumbellIcon}>
                    <Image
                        style={styles.crownIcon}
                        source={require('../assets/weights.png')}
                    />
                    </View>
                    <Text style={styles.caloriesCount}>12345</Text>
                    <Text style={styles.caloriesLabel}>Calories Burnt</Text>
                </View>

                <View style={styles.exercisesColumn}>
                    <ExerciseCard
                        name="Push-ups"
                        muscles="Biceps, Triceps, Shoulders"
                        goal={20}
                        current={10}
                        color="#2196F3"
                    />

                    <ExerciseCard
                        name="Squats"
                        muscles="Calves, Legs, Thighs"
                        goal={20}
                        current={15}
                        color="#00E676"
                    />

                    <ExerciseCard
                        name="Lunges"
                        muscles="Calves, Hamstrings, Glutes"
                        goal={20}
                        current={10}
                        color="#FFC107"
                    />
                </View>
            </View>
        </View>
    );
};

const ExerciseCard = ({ name, muscles, goal, current, color }) => {
    const progress = current / goal;

    return (
        <View style={styles.exerciseCard}>
            <View style={styles.exerciseInfo}>
                <Text style={styles.exerciseName}>{name}</Text>
                <Text style={styles.exerciseMuscles}>{muscles}</Text>
                <Text style={styles.exerciseGoal}>Goal: {goal}</Text>
            </View>

            <View style={styles.progressCircleContainer}>
                <View style={styles.progressCircleBackground}>
                    <View style={[styles.progressCircle, { borderColor: color }]} />
                    <Text style={styles.progressNumber}>{current}</Text>
                </View>
            </View>
        </View>
    );
};

export default WorkoutActivitySection;

const styles = StyleSheet.create({
    activityContainer: {
        backgroundColor: '#0A2642',
        borderRadius: 16,
        overflow: 'hidden',
        padding: 16,
        marginTop: 30,
        marginHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    crownIcon: {
        marginRight: 8,
        fontSize: 20,
    },
    activityTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    menuButton: {
        backgroundColor: '#00BFA5',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuDots: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    activityContent: {
        flexDirection: 'row',
    },
    caloriesBox: {
        width: '35%',
        backgroundColor: '#081E36',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12, // fixed spacing
    },
    dumbellIcon: {
        backgroundColor: '#152A3F',
        width: 48,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    caloriesCount: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    caloriesLabel: {
        color: '#A0A0A0',
        fontSize: 14,
    },
    exercisesColumn: {
        flex: 1,
        justifyContent: 'space-between',
    },
    exerciseCard: {
        backgroundColor: '#081E36',
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    exerciseInfo: {
        flex: 1,
    },
    exerciseName: {
        color: '#2196F3',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    exerciseMuscles: {
        color: '#FFFFFF',
        fontSize: 12,
        marginBottom: 8,
    },
    exerciseGoal: {
        color: '#A0A0A0',
        fontSize: 12,
    },
    goalNumber: {
        color: '#00BFA5',
        fontWeight: 'bold',
    },
    progressCircleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    },
    progressCircleBackground: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#152A3F',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    progressCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#2196F3',
        borderLeftColor: 'transparent',
        position: 'absolute',
        transform: [{ rotate: '45deg' }],
    },
    progressNumber: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
