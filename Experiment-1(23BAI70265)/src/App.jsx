import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from '../pages/dashboard'
import Log from "../pages/Log"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard/>
      <Log/>
    </>
  )
}

export default App
