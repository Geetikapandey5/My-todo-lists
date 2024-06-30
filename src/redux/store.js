import { configureStore } from '@reduxjs/toolkit'; // Import configureStore function from Redux Toolkit
import tasksReducer from './tasksSlice'; // Import your tasksReducer from tasksSlice.js file

// Configure the Redux store using configureStore function
const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Include tasksReducer under the 'tasks' slice of the store
    // Add other reducers here if needed for more slices of state
  },
});

export default store; // Export the configured Redux store
