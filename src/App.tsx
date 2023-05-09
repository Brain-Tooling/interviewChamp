import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.js';
import LoginPage from './pages/login/login/LoginPage';
import SignUp from './pages/SignUp';
import Responses from './pages/Responses';
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
