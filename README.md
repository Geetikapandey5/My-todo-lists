# My To-Do List App

A simple, interactive To-Do List application built with React and Redux. This app allows users to add, edit, delete, and check tasks with an animated background.

## Features

- **Add Tasks**: Enter a task and add it to the list.
- **Edit Tasks**: Edit existing tasks and save changes.
- **Delete Tasks**: Remove tasks from the list.
- **Checkboxes**: Mark tasks as completed.
- **Persistent Storage**: Tasks are saved in local storage.
- **Responsive Design**: Works on mobile, tablet, and desktop devices.
- **Animated Background**: Colorful background animation for visual appeal.

## Technologies Used

- React
- Redux Toolkit
- CSS

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app
Install dependencies:
npm install
Run the app:
npm start
Project Structure
src/
  ├── components/
  │   ├── TaskInput.js       # Input component for adding tasks
  │   └── TaskList.js        # List component displaying tasks
  ├── redux/
  │   ├── store.js           # Redux store configuration
  │   └── tasksSlice.js      # Redux slice for task management
  ├── App.js                 # Main app component
  ├── App.css                # Global styles
  └── index.js               # Entry point

Usage
Add a Task: Type your task in the input field and press "Add Task" or Enter.
Edit a Task: Click the "Edit" button, modify the task, and click "Save".
Delete a Task: Click the "Delete" button to remove a task.
Check a Task: Use the checkbox to mark tasks as complete.
