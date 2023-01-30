import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'movie/:id'} element={<Movie/>}/>
            <Route path={'search'} element={<Search/>}/>
        </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
