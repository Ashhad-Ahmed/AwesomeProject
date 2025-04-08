import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { PlusCircle } from 'lucide-react'; // For the plus icon in the Add Injury button

const InjurySection = () => {
  const injuries = [
    { id: '1', title: 'Knee Injury', image: require('../assets/foot.png') },
    { id: '2', title: 'Knee Injury', image: require('../assets/knee.png') },
  ];

  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Injury & Conditions</Text>
        <TouchableOpacity style={styles.toggleOn}>
          <Text style={styles.toggleText}>...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          {injuries.map((item) => (
            <View key={item.id} style={styles.injuryCard}>
              <Image source={item.image} style={styles.injuryImage} />
              <Text style={styles.injuryText}>{item.title}</Text>
              <TouchableOpacity>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Injury</Text>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e3a52',
    padding: 16,
    borderRadius: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  injuryCard: {
    backgroundColor: '#162c40',
    borderRadius: 12,
    padding: 16,
    width: '48%', // Adjusted for two boxes per row
    alignItems: 'center',
    marginBottom: 16,
  },
  injuryImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  injuryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 6,
  },
  removeText: {
    color: '#0fdfa7',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#0fdfa7',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  plusIcon: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default InjurySection;