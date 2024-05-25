import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-section'>
      <nav>
        <div className="logo">
            <h2>Logo</h2>
        </div>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="category">Category</Link></li>
                <li><Link to="contact">Contact</Link></li>
                
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
