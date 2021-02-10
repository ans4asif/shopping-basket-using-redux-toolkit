import React from 'react';
import { Basket } from './components/Basket';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { LandingPg } from './components/LandingPg';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPg />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
