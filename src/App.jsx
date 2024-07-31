import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/overview" element={<Home />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<div>Projects content goes here.</div>} />
        <Route path="/stars" element={<div>Stars content goes here.</div>} />
        <Route path="/" element={<Home />} /> {/* Default route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
