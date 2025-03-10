import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/home';
import DataPage from './pages/DataPage';
import "./App.css";

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container mt-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<DataPage />} />
            <Route path="*" element={<h1 className="text-center">Página no encontrada</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;