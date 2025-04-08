import React from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import TopImage from './components/TopImage';
import HealthyLife from './components/HealthyLife';
import SearchSection from './components/SearchSection';
import InjurySection from './components/InjurySection';
import CategorySection from './components/CategorySection';
import PopularWorkoutSection from './components/PopularWorkoutSection';
import WorkoutCard from './components/WorkoutCard';
import WorkoutActivitySection from './components/WorkoutActivitySection';
// import AdvertisementSection from './components/AdvertisementSection';


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
                <TopImage />
                <HealthyLife />
                <SearchSection />
                <InjurySection injuries={injuries} />
                <CategorySection categories={categories} />
                <PopularWorkoutSection />
                <WorkoutActivitySection />
                <WorkoutCard />
                {/* <AdvertisementSection /> */}
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
});