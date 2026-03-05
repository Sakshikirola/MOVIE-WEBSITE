import React from 'react' 
import Home from './pages/Home' 
import { Route, Routes } from 'react-router-dom'
import Favourites from './pages/Favourites'
import Navbar from './Components/Navbar'
import { MovieProvider } from './contexts/MovieContext' 
                                                                                    
const App = () => {
 
  return (
    <MovieProvider>
      <Navbar/>
      <main className="main-content"> 
       <Routes>
         <Route path='/' element={<Home/>}/> 
         <Route path='/favorites' element={<Favourites/>}/> 
       </Routes> 
      </main>  
    </MovieProvider>
  )
}

export default App
