import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchMovieById } from '../apis/omdb';
import axios from 'axios';
import MovieCard from '../components/MovieCard/MovieCard';

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
    <div>
        {movie && <MovieCard 
                      Title = {movie.Title}
                      Year = {movie.Year}
                      Type = {movie.Type}
                      Poster = {movie.Poster}
                      />}
    </div>
  )
}

export default MovieDetail
