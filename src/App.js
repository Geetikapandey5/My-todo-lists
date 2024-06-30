import React from 'react';
import './App.css'; // Importing CSS file styling

import TaskInput from './components/TaskInput'; //  path based on my project
import TaskList from './components/TaskList'; // path based on my project

function App() {
  return (
    <div className="App"> {/* Main container with 'App' class */}
      <h1>My To-Do List</h1> {/* Heading for the to-do list */}
      <TaskInput /> {/* TaskInput component for entering tasks */}
      <TaskList /> {/* TaskList component for displaying tasks */}
    </div>
  );
}

export default App;
