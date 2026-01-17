import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Home from './Component/Home'
import Footer from './Component/Footer'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
