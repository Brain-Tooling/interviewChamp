import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/login/LoginPage';
import SignUp from './pages/SignUp';
import Responses from './pages/Responses/Responses.js';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/myresponses' element={<Responses/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
