import { Children, useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Corporate from './Component/Corporate'
import React from 'react'
import About from './Component/About'

function App() {
  return (
    <>
    <Header/>
    <Home/>
    {/* <Corporate/> */}
    {/* <About/> */}
    <Footer/>
    </>
  )
}

export default App
