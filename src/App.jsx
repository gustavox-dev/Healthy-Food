import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { HomePage } from './pages/HomePage'
import { Cadastro } from './pages/Cadastro'
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Cadastro" element={<Cadastro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
