import React from 'react'
import { useMovieContext } from '../contexts/MovieContext' 
import MovieCard from '../Components/MovieCard' 
 
const Favourites = () => {
  const {favorites} = useMovieContext(); 

  if(favorites.length > 0) {
    return <div className='favorites'> 
      <h2>Your Favorites</h2>
      <div className="movies-grid">
       {favorites.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/> 
       ))}    
      </div>   
    </div>  
  }
  else{
     return <div className='favorites-empty'>
     <h2>No Favorite Movies Yet</h2>
     <p>Start adding movies to your favourites and they will apear here !</p> 
    </div>
  }
}
 
export default Favourites
