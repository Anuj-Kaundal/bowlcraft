import { Children, useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Corporate from './Component/Corporate'
import React from 'react'
import About from './Component/About'
import Blog from './Component/Blog'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Applayout from './Component/Applayout'
import Menu from './Component/Menu'
const router =createBrowserRouter([
  {
    path : '/',
    element : <Applayout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/menu',
        element : <Menu/>
      },
      {
        path : '/corporate',
        element : <Corporate/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/blog',
        element : <Blog/>
      }
    ]
  }
])
function App() {
  return (
    < RouterProvider router = {router}/>
  )
}

export default App
