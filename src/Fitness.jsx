import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import WorkoutList from './components/WorkoutCard'

const { width } = Dimensions.get('window');

const injuries = [
    {
        id: '1',
        title: 'Knee Injury',
        image: require('./assets/knee.png'),
    },
    {
        id: '2',
        title: 'Foot Injury',
        image: require('./assets/foot.png'),
    },
];

const categories = [
    { id: '1', title: 'Hand', image: require('./assets/hand.png') },
    { id: '2', title: 'Legs', image: require('./assets/legs.png') },
    { id: '3', title: 'Jump', image: require('./assets/jump.png') },
    { id: '4', title: 'Yoga', image: require('./assets/yoga.png') },
];

const Fitness = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Top Image Section */}
                <ImageBackground
                    source={require('./assets/bgimage.png')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
                    <LinearGradient
                        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}
                        style={styles.overlay}
                    >
                        {/* Top Row */}
                        <View style={styles.topRow}>
                            <Image source={require('./assets/profile.png')} style={styles.profileImage} />
                            <View style={styles.icons}>
                                <Icon name="chatbubble-ellipses-outline" size={22} color="#fff" style={styles.icon} />
                                <Icon name="notifications-outline" size={22} color="#fff" />
                            </View>
                        </View>

                        {/* Greeting Section */}
                        <View style={styles.greetingContainer}>
                            <Text style={styles.greeting}>Hi, Aimal !</Text>
                            <Text style={styles.question}>
                                Have you{'\n'}<Text style={{ fontWeight: 'bold' }}>exercised today?</Text>
                            </Text>
                        </View>

                        {/* Stats Row */}
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

                {/* Healthy Life Section */}
                <View style={styles.healthyLifeContainer}>
                    <View style={styles.healthyText}>
                        <Text style={styles.healthyTitle}>Healthy life belongs to everyone</Text>
                        <TouchableOpacity style={styles.planButton}>
                            <Text style={styles.planButtonText}>Today’s Plan</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('./assets/healthy.png')} style={styles.healthyImage} />
                </View>

                {/* Search + AI Button */}
                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search..."
                        placeholderTextColor="#aaa"
                    />
                </View>
                <TouchableOpacity style={styles.aiWorkoutButton}>
                    <Text style={styles.aiWorkoutText}>Create AI Workout Plan</Text>
                    <Image source={require('./assets/crown.png')} style={styles.crownIcon} />
                </TouchableOpacity>

                {/* Injury Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Injury & Conditions</Text>
                    <TouchableOpacity style={styles.toggleOn}>
                        <Text style={styles.toggleText}>...</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.injuryScroll}>
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


                {/* Category Section */}
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

                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Popular Workout</Text>
                        <TouchableOpacity style={styles.moreButton}>
                            <Icon name="ellipsis-horizontal" size={22} color="#00e0c6" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {/* Card 1 */}
                        <View style={styles.card}>
                            <View style={styles.cardImageWrapper}>
                                <Image source={require('./assets/stairs.png')} style={styles.cardImage} />
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
                                <Image source={require('./assets/yoga.png')} style={styles.cardImage} />
                                <View style={styles.tagOverlay}>
                                    <Text style={styles.tag}>Stomach</Text>
                                    <Text style={styles.tag}>Hands</Text>
                                </View>
                            </View>
                            <Text style={styles.cardTitle}>Lifting Belly</Text>
                            <Text style={styles.cardDesc}>Shape your stomach to look...</Text>
                        </View>

                        {/* Card 3 */}
                        <View style={styles.card}>
                            <View style={styles.cardImageWrapper}>
                                <Image source={require('./assets/stairs.png')} style={styles.cardImage} />
                                <View style={styles.tagOverlay}>
                                    <Text style={styles.tag}>Arms</Text>
                                    <Text style={styles.tag}>Strength</Text>
                                </View>
                            </View>
                            <Text style={styles.cardTitle}>Dumbbell Curls</Text>
                            <Text style={styles.cardDesc}>Build arm muscles effectively</Text>
                        </View>
                    </ScrollView>
                </View>

                {/* Workout Activity Section */}
                <View style={styles.activityContainer}>
                    <Text style={styles.activityTitle}>Your Workout Activity</Text>

                    <View style={styles.activityContent}>
                        {/* Calories Box */}
                        <View style={styles.caloriesBox}>
                            <Image
                                source={require('./assets/weights.png')} // Replace with your dumbbell icon
                                style={styles.caloriesIcon}
                            />
                            <Text style={styles.caloriesCount}>12345</Text>
                            <Text style={styles.caloriesLabel}>Calories Burnt</Text>
                        </View>

                        {/* Activity Cards */}
                        <View style={styles.activityList}>
                            {/* Push-ups */}
                            <View style={styles.activityCard}>
                                <Text style={styles.activityNameBlue}>Push-ups</Text>
                                <Text style={styles.activityMuscles}>Biceps, Triceps, Shoulders</Text>
                                <Text style={styles.goalText}>
                                    Goal : <Text style={styles.goalNumber}>20</Text>
                                </Text>
                                <View style={styles.progressCircleOuter}>
                                    <View style={[styles.progressCircleInner, { width: '50%' }]} />
                                    <Text style={styles.progressText}>10</Text>
                                </View>
                            </View>

                            {/* Squats */}
                            <View style={styles.activityCard}>
                                <Text style={styles.activityNameGreen}>Squats</Text>
                                <Text style={styles.activityMuscles}>Calves, Legs, Thighs</Text>
                                <Text style={styles.goalText}>
                                    Goal : <Text style={styles.goalNumber}>20</Text>
                                </Text>
                                <View style={styles.progressCircleOuter}>
                                    <View style={[styles.progressCircleInnerGreen, { width: '75%' }]} />
                                    <Text style={styles.progressText}>15</Text>
                                </View>
                            </View>

                            {/* Lunges */}
                            <View style={styles.activityCard}>
                                <Text style={styles.activityName}>Lunges</Text>
                                <Text style={styles.activityMuscles}>Calves, Hamstrings, Glutes</Text>
                                <Text style={styles.goalText}>
                                    Goal : <Text style={styles.goalNumber}>20</Text>
                                </Text>
                                <View style={styles.progressCircleOuter}>
                                    <View style={[styles.progressCircleInner, { width: '50%' }]} />
                                    <Text style={styles.progressText}>10</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* another workout activity by talal */}
                <View style={styles.screen}>
                    <WorkoutList />
                </View>

                <View style={styles.localImageContainer}>
                    <Image source={require('./assets/advertise.png')} style={styles.localImage} />
                </View>
                
            </View>
        </ScrollView>
    );
};

export default Fitness;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05192d',
    },
    backgroundImage: {
        width: width,
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
    healthyLifeContainer: {
        backgroundColor: '#102b46',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
    },
    healthyText: {
        flex: 1,
    },
    healthyTitle: {
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
    healthyImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    searchSection: {
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
        width: 120,
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
    addInjuryCard: {
        backgroundColor: '#22c55e',
        borderRadius: 16,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
    },
    addText: {
        color: '#fff',
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
    sectionContainer: {
        backgroundColor: '#032030',
        paddingHorizontal: 16,
        paddingTop: 24,
    },

    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    moreButton: {
        backgroundColor: '#00e0c6',
        borderRadius: 20,
        padding: 4,
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
    activityList: {
        flex: 1,
        gap: 12,
    },
    activityCard: {
        backgroundColor: '#05192d',
        borderRadius: 12,
        padding: 12,
    },
    activityName: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    activityNameBlue: {
        color: '#3b82f6',
        fontWeight: 'bold',
        fontSize: 16,
    },
    activityNameGreen: {
        color: '#10b981',
        fontWeight: 'bold',
        fontSize: 16,
    },
    activityMuscles: {
        color: '#ccc',
        fontSize: 13,
        marginVertical: 4,
    },
    goalText: {
        color: '#aaa',
        fontSize: 13,
    },
    goalNumber: {
        color: '#4ade80',
        fontWeight: 'bold',
    },
    progressCircleOuter: {
        height: 24,
        backgroundColor: '#1f2937',
        borderRadius: 12,
        marginTop: 8,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    progressCircleInner: {
        height: '100%',
        backgroundColor: '#3b82f6',
        position: 'absolute',
        left: 0,
        top: 0,
        borderRadius: 12,
    },
    progressCircleInnerGreen: {
        height: '100%',
        backgroundColor: '#10b981',
        position: 'absolute',
        left: 0,
        top: 0,
        borderRadius: 12,
    },
    progressText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        zIndex: 1,
    },
    localImageContainer:{
        paddingHorizontal:45,
        alignContent: 'center',
        alignItems: 'center'
    }

});
