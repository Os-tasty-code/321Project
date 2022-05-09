import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './index.css';
import './components/Nav.css'

import {default as App} from './components/App';
import {default as Nav} from './components/Nav';
import {default as Login} from './components/Login';
import {default as SetUp} from './components/SetUp';
//import './SetUp.css';

ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<SetUp/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
console.log("Old Page!");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
