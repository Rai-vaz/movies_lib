import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import '../css/MovieGrid.css'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const paramsValue = searchParams.get('q')

  async function getSearchedMovies(movieToSearch) {
    const foundMovies = await fetch(movieToSearch)
    const foundMoviesJson = await foundMovies.json()

    setMovies(foundMoviesJson.results)
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${paramsValue}`
    getSearchedMovies(searchWithQueryURL)
  },[paramsValue])

  console.log(movies)
  return (
    <div className="container">
      <h2 className="title">
        Resultado para: <span className="query-text">{paramsValue}</span>
      </h2>
      <div className="movies-container">
      <div className="quantTitulos">
        <p>Títulos relacionados:
          <span>{movies.length}</span>
        </p>
      </div>
        {movies == 0 && <p> carregando... </p>}
        {
          movies.length > 0 && 
          movies.map((movies) => <MovieCard movie={movies} key={movies.id}/> )

        }

      </div>
  </div>
  )
}

export default Search