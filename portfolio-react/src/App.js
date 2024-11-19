import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BullAndCows from './components/BullAndCows'; // Corrigindo a importação

function App() {
  return (
    <Router>
      {/* Certifique-se de que o Nav não está com posicionamento fixo que possa cobrir as rotas */}
      <Nav />
      <div style={{ paddingTop: '60px' }}> {/* Ajuste de espaço para o nav, se necessário */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bulls-and-cows" element={<BullAndCows />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
