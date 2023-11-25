import React from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import Trending from './pages/Trending';
import Category from './pages/Category';
import Header from './component/Header';
import MobileNav from './component/MobileNav';

function App() {
  return (
    <>
    <Header/>
    <MobileNav />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/trending' element={<Trending/>} />
          <Route path='/category' element={<Category/>} />
      </Routes>
    </>
  )
}

export default App
