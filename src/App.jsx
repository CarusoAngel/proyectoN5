import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DataPage from './pages/DataPage.jsx';

function App () {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="*" element={<h1 className="text-center">Página no encontrada</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;