import React from 'react';
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
      <div className="App">
        <NavBar/>
    <About/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Certifications/>
    <Education/>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: sagnikgraviton847@gmail.com</p>
        </section>
      </div>
  );
}

export default App;
