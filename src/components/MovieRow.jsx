import { useEffect, useState } from 'react'
import '../css/movieRow.css'
import getData from '../services/fetchData'

const MovieRow = ({ data }) => {
  const { title, fetchUrl, isLargeRow } = data
  const [movies, setMovies] = useState([])
  const img_base_url = 'https://image.tmdb.org/t/p/original/'

  const fetchData = async () => {
    try {
      const data = await getData(fetchUrl)
      const result = data.results
      setMovies(result)
      return result
    } catch (error) {
      console.log('ERROR::', error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(movies)
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`https://image.tmdb.org/t/p/original${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            loading='lazy'
          />
        ))}
      </div>
    </div>
  )
}

export default MovieRow
