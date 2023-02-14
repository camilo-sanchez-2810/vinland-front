import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [show, setShow] = useState(false)
  const handleShow = (e) => {
    setShow(!show)
  }
  return (
    <div>
        <Navbar handleShow={handleShow} show={show}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
