// import React, { useEffect, useState } from 'react'
import './Home.css';
// import { searchMovie } from '../apis/omdb';

// Components Import 
import MovieCard from '../components/MovieCard/MovieCard';
// import  axios from 'axios';
import useMovieList from '../hooks/useMovieList';


const Home = () => {

  const {movieList} = useMovieList('harry','batman', 'avengers');
  
  return (
    <>
       <div className='movie-card-wrapper'>
           { movieList.length >0 && movieList.map(movie => <MovieCard 
                                    key={movie.imdbID}
                                    {...movie}
                                    id = {movie.imdbID}
                                    />
            )}
       </div>
    </>
  )
};

export default Home;