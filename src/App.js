import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;