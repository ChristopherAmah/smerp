import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import Support from './pages/Support'


function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
