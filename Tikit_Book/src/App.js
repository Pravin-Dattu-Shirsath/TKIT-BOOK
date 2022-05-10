import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import MoviInfo from './Component/MoviInfo';
import Navbar from './Component/Navbar';
import SeatBook from './Component/SeatBook';
import TikitBook from './Component/TikitBook';
import TikitInfo from './Component/TikitInfo';


export default function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviinfo/:id" element={<MoviInfo />} />
          <Route path="/tikitbook/:id" element={<TikitBook />} />
          <Route path="/seatbook" element={<SeatBook />} />
          <Route path="/tikitinfo" element={<TikitInfo />} />
        </Routes>
      </BrowserRouter>


    </div>
  )

}
