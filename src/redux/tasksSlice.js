import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      const { index, newTask } = action.payload;
      state.tasks[index] = newTask;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
