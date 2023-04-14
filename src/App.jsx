import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Outlet } from 'react-router-dom'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}