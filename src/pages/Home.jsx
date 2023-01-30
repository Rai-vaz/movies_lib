import { useState, useEffect } from "react"


const Home = () => {
  const moviesURL = import.meta.env.VITE_API
  const apiKey = import.meta.env.VITE_API_KEY

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)
  },[])

/*  const myjson = ["nome": "Raí",
  "idade": 24,
  "pais":{
    "mae": "maria",
    "pai": "joao"
  },
    "nome": "gabriela",
    "idade": "30",
    "pais": {
      "mae": "Ana",
      "pai": "Marcos"
    }]   */
    
  const frutas = [{id:1, nome:'Rai'},{id:2, nome:'Gabi'}]



  return (
    <div>{topMovies && topMovies.map((movies) => <p key={movies.id}>{movies.title}</p>)}
    <br></br>
    <p>{frutas.map((item) => item.nome)}</p>


    </div>
   
    
   
  )
}

export default Home