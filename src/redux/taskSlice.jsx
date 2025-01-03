import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define initialState
const initialState = {
  tasks: [],
  filter: 'all', // Default filter can be 'all'
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,  // Use the correctly defined initialState here
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      AsyncStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
      AsyncStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      AsyncStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    loadTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, toggleTask, deleteTask, setFilter, loadTasks } = taskSlice.actions;

export default taskSlice.reducer;
