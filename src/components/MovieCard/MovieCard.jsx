import './MovieCard.css';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function MovieCard({Title, Year, Type, Poster, id}) {
    const navigator = useNavigate();

    function handleClick(){
        navigator(`/movie/${id}`)
    }
  return (
    <div onClick={handleClick} className='movie-wrapper'>
        <div className='movie-image'>
            <img src= {Poster} />
        </div>
        <div className='movie-title'>
            <span>{Title}</span>
        </div>
        <div className='movie-year'>
            <span>Release in : {Year}</span>
        </div>
        <div className='movie-type'>
            <span>Type : {Type}</span>
        </div>

    </div>
  )
}

export default MovieCard
