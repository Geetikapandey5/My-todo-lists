import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/tasksSlice';
import '../App.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  const handleSaveTask = (index) => {
    dispatch(updateTask({ index, newTask: editText }));
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="task-list-container">
      <h2 className="task-list-heading">Task List</h2>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="task-input"
                />
                <button onClick={() => handleSaveTask(index)} className="task-button">Save</button>
              </>
            ) : (
              <>
                <input type="checkbox" className="task-checkbox" />
                {task}
                <button onClick={() => handleEditTask(index)} className="task-button">Edit</button>
                <button onClick={() => handleDeleteTask(index)} className="task-button">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
