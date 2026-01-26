import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from '../pages/dashboard'
import Log from "../pages/Log"
import ProtectedRoute from "./ProtectedRoute" 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProtectedRoute>
        <Dashboard/>
        <Log/>
      </ProtectedRoute>
    </>
  )
}

export default App
