import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DataPage from './pages/DataPage';

function App () {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<DataPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;