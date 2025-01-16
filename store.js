import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import tasksReducer from './slices/tasksSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer, // Key for auth reducer
    tasks: tasksReducer, // Key for tasks reducer
  },
});


export default store;