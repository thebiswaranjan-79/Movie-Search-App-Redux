import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../apis/omdb";
import MovieCard from "../components/MovieCard/MovieCard";
// import ReactStars from "react-stars";

// CSS imports
import './MovieDetail.css';



function MovieDetail() {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();

    async function downloadMovie(){
        const response = await axios.get(searchMovieById(id));
        setMovie(response.data);
    }

    useEffect(() => {
        downloadMovie();
        const random = Math.random();
        if(random > 0.5) {
            throw "error";
        }
    }, [id]);

    return (
        <div className="movie-details-wrapper">
            {movie && <MovieCard 
                        Title={movie.Title} 
                        Year={movie.Year}
                        Type={movie.Type}
                        Poster={movie.Poster} 
                        id={movie.imdbID}
                        />
            }
            {movie && <div className="movie-details">
                <div>
                    Plot: {movie.Plot}
                </div>
                <div>
                    Actors: {movie.Actors}
                </div>
                <div>
                    Genre: {movie.Genre.split(',').map((genre) => {
                        return <span className="genre" key={genre}>{genre}</span>
                    })}
                </div>
                <div>
                {/* <ReactStars
                        count={10}
                        size={24}
                        value={Math.floor(movie.imdbRating)}
                        edit={false}
                    /> */}
                </div>
            </div>}
        </div>
    )
}

export default MovieDetail;