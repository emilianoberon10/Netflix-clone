import Nav from './Nav'
import Banner from './Banner'
import MovieRow from './MovieRow'
import request from '../services/request'

const moviesRows = [
  {
    id: 0,
    title: 'NETFLIX ORIGINALS',
    fetchUrl: `${request.fetchNetflixOriginals}`,
    isLargeRow: true,
  },
  {
    id: 1,
    title: 'Trending Now',
    fetchUrl: `${request.fetchTrending}`,
    isLargeRow: false,
  },
  {
    id: 2,
    title: 'Top Rated',
    fetchUrl: `${request.fetchTopRated}`,
    isLargeRow: false,
  },
  {
    id: 3,
    title: 'Action',
    fetchUrl: `${request.fetchActionMovies}`,
    isLargeRow: false,
  },
  {
    id: 4,
    title: 'Comedy',
    fetchUrl: `${request.fetchComedyMovies}`,
    isLargeRow: false,
  },
  {
    id: 5,
    title: 'Romance',
    fetchUrl: `${request.fetchRomanceMovies}`,
    isLargeRow: false,
  },
  {
    id: 6,
    title: 'Horror',
    fetchUrl: `${request.fecthHorrorMovies}}`,
    isLargeRow: false,
  },
  {
    id: 7,
    title: 'Documentaries',
    fetchUrl: `${request.fetchDocumentaries}`,
    isLargeRow: false,
  },
]

const HomeScreen = () => {
  return (
    <div>
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Movies */}
      {moviesRows.map((data) => (
        <MovieRow key={data.id} data={data} />
      ))}
    </div>
  )
}

export default HomeScreen
