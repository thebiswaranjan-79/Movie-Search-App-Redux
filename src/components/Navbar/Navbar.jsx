import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <div>Movie Base</div>
        <div className='search-bar'>

            <input 
                type="text"
                placeholder='What Movie you are Thinking About....'
            />

        </div>
        <div>
            Theme
        </div>
    </div>
  )
}

export default Navbar
