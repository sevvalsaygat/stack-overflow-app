import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home, Development } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/development" element={<Development />} />
    </Routes>
  );
}

export default App;
