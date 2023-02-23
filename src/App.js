import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NoClue from './pages/NoClue';
import Home from './pages/Home';
import Nations from './pages/Nations';
import Nation from './pages/Nation';
import Regions from './pages/Regions';
import Region from './pages/Region';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route caseSensitive path="nations" element={<Nations />} />
        <Route caseSensitive path="nations/:name" element={<Nation />} />
        <Route caseSensitive path="region" element={<Regions />} />
        <Route caseSensitive path="region/:name" element={<Region />} />
        <Route path="*" element={<NoClue />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
