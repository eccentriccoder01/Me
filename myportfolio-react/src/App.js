import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Certifications from './Pages/Certifications';
import Education from './Pages/Education';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import NavBar from './Pages/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
    <About/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Certifications/>
    <Education/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: sagnikgraviton847@gmail.com</p>
        </section>
      </div>
    </Router>
  );
}

export default App;
