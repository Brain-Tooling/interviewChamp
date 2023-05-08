import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.js';
import LoginPage from './pages/LoginPage.tsx';
import SignUp from './pages/SignUp.tsx';
import Responses from './pages/Responses.tsx';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/myresponses' element={<Responses/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
