import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchMovieById } from '../apis/omdb';
import axios from 'axios';
import MovieCard from '../components/MovieCard/MovieCard';

import './MovieDetail.css';

function MovieDetail() {

  const[movie, setMovie] = useState(null);
  const {id} = useParams();
  async function downloadMovie() {
    const response = await axios.get(searchMovieById(id));
    
    // console.log("SearchMovie By ID ", id);
    setMovie(response.data);
  }
  useEffect(() =>{
    downloadMovie();
  }, [id]);

  return (
    <div className='movie-details-wrapper'>
       
            {movie && <MovieCard 
                            Title = {movie.Title}
                            Year = {movie.Year}
                            Type = {movie.Type}
                            Poster = {movie.Poster}
                            id={movie.imdbID}
                            />
            }

       { movie && <div className='movie-details'>
              <div>
                Plot : {movie.Plot}
              </div>
              <div>
                Actors : {movie.Actors}
              </div>

              <div>
                Genre : {movie.Genre.split(',').map((genre) => {
                    return <span className='genre' key={genre}>{genre}</span>
                })}
              </div>
       </div>}
    </div>
  )
}

export default MovieDetail
