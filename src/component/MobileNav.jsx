import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';

import '../styles/MobileNav.css'


const MobileNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };
  return (
    <>
    <div className="bar-main">
    <div className='bar container' >
      <NavLink to="/"><p>I-Music</p></NavLink>
      <RiMenu3Fill className='menu' onClick={toggleMenu} />
    </div>
    </div>

    <div className= {isOpen ? "mobile-nav" : "menu-li"}  id="mobile">
        <ul>
              <NavLink to="/">
                  Home
              </NavLink>
              <NavLink to="/trending">
                Trending
              </NavLink>
              <NavLink to="/category">
              Category
              </NavLink>
              </ul>
    </div>


    </>
  )
}

export default MobileNav