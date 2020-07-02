import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import App from './components/App';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3001'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

