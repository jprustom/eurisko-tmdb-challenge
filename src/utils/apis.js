export const TMDB_API_GET_GENRE= (genreId)=>`discover/movie?with_genres=${genreId}`
export const TMDB_API_POSTER_PATH="https://image.tmdb.org/t/p/original"
export const TMDB_API_BASE_URL="https://api.themoviedb.org/3/"
export const TMDB_API_GET_MOVIE=(movieId)=>"/movie/"+movieId