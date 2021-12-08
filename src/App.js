import React from 'react';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import './App.css';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className = "App">

    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>

        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>


      </Routes>
  </Router>
    </div>
  );
}

export default App;
