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

  const obj = {
  "nome": "Rai",
  "endereco":{
    "Rua":"Lua",
    "numero": 45
  }
  }

  

  return (
    <div>{topMovies && topMovies.map((movies) => <p key={movies.id}>{movies.title}</p>)}
    <br></br>
    {
      Object.values(obj).forEach(function(values){
        if(typeof values == 'object'){
            Object.values(values).forEach(function(val){
              <span>{val}</span>
            })
        }else{
          <span>{values}</span>
        }
      })
    }
    </div>
   
    
   
  )
}

export default Home