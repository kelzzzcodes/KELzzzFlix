import { Routes, Route } from 'react-router-dom'

import './App.css'
import {Navbar,Footer } from './components';
import { Home, } from './pages';
import MovieDetails from './components/MovieDetails';




const App = () => {
  return (
    <>


     <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='moviedetails' element={<MovieDetails/>}/>


     </Routes>
     <Footer/>


    </>
  )
}

export default App
