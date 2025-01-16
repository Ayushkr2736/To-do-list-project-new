import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateWeather: (state, action) => {
      const { id, weather } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task && weather && typeof weather.temp !== 'object' && typeof weather.condition !== 'object') {
        task.weather = weather;
      } else {
        console.error('Invalid weather update:', weather);
      }
    },
  },
});

export const { addTask, deleteTask, updateWeather } = tasksSlice.actions;
export default tasksSlice.reducer;
