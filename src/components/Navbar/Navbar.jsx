import React, { useRef } from 'react'
import './Navbar.css'


function Navbar(){

    const resultListRef = useRef(null);

  return (
    <div className='navbar-wrapper'>
        <div>Movie Base</div>
        <div className='search-bar'>

            <input 
                id='movie-search-input'
                type="text"
                onFocus={() => {
                  resultListRef.current.style.display = 'block';
                }}
                onBlur={() => {
                  resultListRef.current.style.display = 'none';
                }}
                placeholder='What Movie you are Thinking About....'
            />
            <div id='result-list' ref={resultListRef}>
                <div  className='autocomplete-result'>Result 1</div>
                <div  className='autocomplete-result'>Result 2</div>
                <div  className='autocomplete-result'>Result 3</div>
            </div>

        </div>

        <div>
            Theme
        </div>
    </div>
  )
}

export default Navbar
