export function searchMovie(term){
    return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${term}`;

    console.log("Inside search movie", import.meta.env.VITE_API_KEY);
}
