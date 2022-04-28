import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

import './index.css';
import App from './App';

import SetUp from './SetUp';
//import './SetUp.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log("Old Page!");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
