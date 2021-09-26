const API_KEY = '999f8dbb1b471fb34a1ff6233674125b'
const BaseURL = 'https://api.themoviedb.org/3'

const requests = {
  fetchTrending: `${BaseURL}/trending/all/week?api_key=${API_KEY}&lenguage=en-US`,
  fetchNetflixOriginals: `${BaseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BaseURL}/movie/top_rated?api_key=${API_KEY}&lenguage=en-US`,
  fetchActionMovies: `${BaseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${BaseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fecthHorrorMovies: `${BaseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${BaseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${BaseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests
