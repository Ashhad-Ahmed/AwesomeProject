import React, { useEffect } from 'react';
import { Provider } from 'react-redux'; // Ensure you import Provider correctly
import store from './src/redux/store'; // Correct import for your Redux store
import HomeScreen from './src/screens/HomeScreen'; // Correct path for your HomeScreen

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loadTasks } from './src/redux/taskSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadStoredTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        dispatch(loadTasks(JSON.parse(storedTasks)));
      }
    };
    loadStoredTasks();
  }, [dispatch]);

  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
