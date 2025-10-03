import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './Components/singup'
import Signin from './Components/singin'
import Home from './pages/home'
import ProtectedRoute from './Components/protectRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/signup" replace />} />
    </Routes>
  )
}