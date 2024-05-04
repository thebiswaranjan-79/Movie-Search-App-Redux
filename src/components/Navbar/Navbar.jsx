import  { useState } from 'react'
import { useContext } from 'react';

import './Navbar.css'

import ThemeContext from '../../context/ThemeContext';
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { useNavigate,Link  } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar(){

    // const resultListRef = useRef(null);
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
    const[searchTerm, setSearchTerm] = useState('');
    const{movieList} = useMovieList(searchTerm);
    const navigator = useNavigate();

    const {theme, setTheme} = useContext(ThemeContext); 

    function handleAutoCompleteClick(e, movieImdbId){
      // console.log("OnMouse Down", e.target);
      // console.log(movieImdbId);
      navigator(`/movie/${movieImdbId}`);
    }

  return (
    <div className='navbar-wrapper'>
        <div className='movie-base-title'><Link to = {"/"}>Movie Base</Link></div>
        <div className='search-bar'>

            <input 
                id='movie-search-input'
                type="text"
                onFocus={() => {
                  // resultListRef.current.style.display = 'block';
                  setIsAutoCompleteVisible(true);
                }}
                onBlur={() => {
                  setIsAutoCompleteVisible(false);
                }}
                onChange={useDebounce((e) => {
                  setSearchTerm(e.target.value);
                })}
                placeholder='What Movie you are Thinking About....'
            />
            <div id='result-list' style={{display : (isAutoCompleteVisible) ? 'block' : 'none'}}>
              <div className='autocomplete-result'>Auto Complete Results...</div>
                { movieList.length > 0 &&
                  movieList.map(movie => (

                <div 
                  onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)} 
                  key={movie.imdbID} 
                  className='autocomplete-result'>
                  {movie.Title}
                </div>
              ))}
          
            </div>

        </div>

        <div onClick={() => setTheme((theme == 'dark') ? 'light' : 'dark')}>
            <FontAwesomeIcon className='theme-icon' icon={(theme == 'dark')  ? faSun : faMoon}/>
        </div>
    </div>
  )
}

export default Navbar
