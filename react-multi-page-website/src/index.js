import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {default as Navigation} from './components/Navigation.jsx'
import {default as Footer} from './components/Footer.jsx'
import {default as Home} from './components/Home.jsx'
import {default as About} from './components/About.jsx'
import {default as Contact} from './components/Contact.jsx'

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);