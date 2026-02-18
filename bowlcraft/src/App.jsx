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
import Productdetails from './Component/Productdetails'
import Signin from './Component/Signin'
import Login from './Component/Login'
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
      },
      {
        path :'/signin',
        element :<Signin/>
      },
      {
        path : '/login',
        element : <Login/>  
      },
      {
        path : '/productdetails/:id', // :id is used to make dynamic route so this is also same as id use in useParams in productdetails.jsx(jis page me details show karvani hogi) 
        element : <Productdetails/>
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
