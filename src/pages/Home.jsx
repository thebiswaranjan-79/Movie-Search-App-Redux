import React, { useEffect, useState } from 'react'
import './Home.css';
import { searchMovie } from '../apis/omdb';

// Components Import 
import MovieCard from '../components/MovieCard/MovieCard';
import  axios from 'axios';



const Home = () => {

    const [movieList, setMovieList] = useState([]);

    async function downloadDefaultMovie(...args){
        const urls = args.map((name) => searchMovie(name));
        // console.log(urls);
        const response = await axios.all(urls.map(url => axios.get(url)));
        // console.log(response);
        const movies = response.map((movieResponse) => movieResponse.data.Search);
        // console.log(movies);
        console.log([].concat(...movies));
        setMovieList([].concat(...movies));
        // setMovieList([...movieList, response.data.Search]);
    }

    useEffect(() => {
      downloadDefaultMovie('harry','batman', 'avengers');
      
    }, []);

  return (
    <>
       <div className='movie-card-wrapper'>
           { movieList.length >0 && movieList.map(movie => <MovieCard 
                                    key={movie.imdbID}
                                    {...movie}
                                    />
            )}
       </div>
    </>
  )
};

export default Home;