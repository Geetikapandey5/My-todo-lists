import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import '../App.css'; // Import your CSS file for styling

const TaskInput = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(''); // State to hold the task input value

  // Handle input change
  const handleInputChange = (event) => {
    setTask(event.target.value); // Update task state with input value
  };

  // Handle Add Task button click
  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task)); // Dispatch addTask action with task payload
      setTask(''); // Clear the input field after adding task
    }
  };

  // Handle Enter key press in the input field
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask(); // Call handleAddTask function on Enter key press
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={handleInputChange} // Handle input changes
        onKeyPress={handleKeyPress} // Handle Enter key press
        className="task-input" // Apply styling class to input
      />
      <button onClick={handleAddTask} className="task-button">Add Task</button> {/* Button to add task */}
    </div>
  );
};

export default TaskInput;
