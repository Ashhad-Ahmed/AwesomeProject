import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/taskSlice';

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks =
    filter === 'completed'
      ? tasks.filter((t) => t.completed)
      : filter === 'incomplete'
      ? tasks.filter((t) => !t.completed)
      : tasks;

  return (
    <FlatList
      data={filteredTasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.taskContainer}>
          <Text style={item.completed ? styles.completed : styles.text}>
            {item.text}
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Toggle" onPress={() => dispatch(toggleTask(item.id))} />
            <Button title="Delete" onPress={() => dispatch(deleteTask(item.id))} />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'column', // Text and buttons arranged vertically
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    flexDirection: 'row', // Buttons arranged horizontally
    justifyContent: 'space-between',
    marginTop: 10, // Adds gap between text and buttons
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: 'black', // Ensures the task text is black
  },
  completed: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'black',
  },
});

export default TaskList;

