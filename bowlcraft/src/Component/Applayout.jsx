import React from 'react'
import Header from './Header.jsx'
import {Outlet} from 'react-router-dom'
import Footer from './Footer.jsx'
import { ScrollRestoration } from "react-router-dom"; // this line used for scroll restoration (means if we navigate any page then it will scroll to top of the page)
function Applayout() {
  return (
    <>
    <ScrollRestoration /> {/* this component used for scroll restoration */}
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout