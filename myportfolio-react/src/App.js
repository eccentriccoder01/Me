import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Certifications from './Pages/Certifications';
import Education from './Pages/Education';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
