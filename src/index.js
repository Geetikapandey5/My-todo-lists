import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing CSS file for styling
import App from './App'; // Importing my App component
import { Provider } from 'react-redux'; // Importing Provider from React Redux
import store from './redux/store'; // Importing the Redux store

ReactDOM.render(
  <Provider store={store}> {/* Wrap the App component with the Redux Provider */}
    <App /> {/* Render your App component */}
  </Provider>,
  document.getElementById('root') // Mount the app in the root element of your HTML
);

