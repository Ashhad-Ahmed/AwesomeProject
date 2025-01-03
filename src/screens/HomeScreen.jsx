import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TaskInput from '../Components/TaskInput';
import TaskList from '../Components/TaskList';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/taskSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TaskInput />
      <View style={styles.filters}>
        <Button title="All" onPress={() => dispatch(setFilter('all'))} />
        <Button title="Completed" onPress={() => dispatch(setFilter('completed'))} />
        <Button title="Incomplete" onPress={() => dispatch(setFilter('incomplete'))} />
      </View>
      <TaskList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  filters: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
});

export default HomeScreen;
