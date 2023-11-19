import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  return (
   <>
        <div className="header">
            <div className="header-wrapper container">
                <h3>Logo</h3>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/trending">Trending</Link>
                    <Link to="/category">Category</Link>
                </ul>
            </div>
        </div>
   </>
  )
}

export default Header