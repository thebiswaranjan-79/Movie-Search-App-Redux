import axios from "axios";
import { useEffect, useState } from "react";
import { searchMovie } from "../apis/omdb";

function useMovieList(...args) {

    const [movieList, setMovieList] = useState([]);

    async function downloadDefaultMovie(...args){
     try {
        const urls = args.map((name) => searchMovie(name));
        // console.log(urls);
        const response = await axios.all(urls.map(url => axios.get(url)));
        // console.log(response);
        if(response[0].data.Error){
          setMovieList([]);
        }else{
          const movies = response.map((movieResponse) => movieResponse.data.Search);
          // console.log(movies);
          // console.log([].concat(...movies));
          setMovieList([].concat(...movies));
          // setMovieList([...movieList, response.data.Search]);
        }

     } catch (error) {
        console.log("API Request Failed ");
     }
    }

    useEffect(() => {
      downloadDefaultMovie(...args);   
    }, [...args]);
    
    return {movieList};

}

export default useMovieList;