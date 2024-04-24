export function searchMovie(term){
    return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${term}`;

    console.log("Inside search movie", import.meta.env.VITE_API_KEY);
}

export function searchMovieById(imdbId){
    console.log("API Hitted Bu the Call ");
    console.log("Inside search movie", import.meta.env.VITE_API_KEY);
    console.log("The ImDB ID is",imdbId);
    return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${imdbId}`;
}
