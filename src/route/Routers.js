import React from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import Home from "../pages/Home"

const Routers = () => {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Routers