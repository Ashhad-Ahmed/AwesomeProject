import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const workouts = [
  {
    id: '1',
    image: require('../assets/yoga.png'),
    title: 'Doing leg stretch',
    subtitle: 'Finish this exercise in 15 min',
  },
  {
    id: '2',
    image: require('../assets/yoga.png'),
    title: 'Lifting Belly',
    subtitle: 'Finish this exercise in 15 min',
  },
  {
    id: '3',
    image: require('../assets/yoga.png'),
    title: 'High Jump',
    subtitle: 'Finish this exercise in 15 min',
  },
];

const WorkoutCard = ({ image, title, subtitle }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <Icon name="chevron-forward" size={24} color="#00D29B" />
  </TouchableOpacity>
);

const WorkoutList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkoutCard
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05192d',
    padding: 16,
    borderRadius: 10,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1E2A47',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 12,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 12,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: '#AAB2C5',
    fontSize: 13,
    marginTop: 4,
  },
});

export default WorkoutList;
