import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoClue from './pages/NoClue';
import Home from './pages/Home';
import Nations from './pages/Nations';
import Nation from './pages/Nation';
import './App.css';
import NavBar from './components/NavBar/NavBar';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <NavBar />
      <h1>NationClues NAV</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="nations" element={<Nations />} />
        <Route path="nations/:name" element={<Nation />} />
        <Route path="*" element={<NoClue />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
