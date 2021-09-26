import React, { useState, useEffect } from 'react'
import '../css/banner.css'
import getData from '../services/fetchData'
import request from '../services/request'

function Banner() {
  const [movie, setMovie] = useState([])

  const fetchData = async () => {
    const data = await getData(request.fetchNetflixOriginals)
    const randomBanner = Math.floor(Math.random() * (data.results.length - 1))
    const result = data.results[randomBanner]
    setMovie(result)
    return result
  }

  useEffect(() => {
    fetchData()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h2 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
