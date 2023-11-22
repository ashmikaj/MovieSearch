import React, {useEffect, useState}  from 'react';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';
import Profile from './Profile';
import './App.css';
import { useNavigate } from 'react-router-dom';



const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=804b9a2c'; 

const MovieLand = () =>{

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);


    const Navigate = useNavigate();
  
  
    const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
   }
  
    useEffect(()=>{
    searchMovies('Batman');
    },[]);

    return (
      <div className='app'>
        <h1>MoviesLand</h1> 
        <div className='search'>
          <input
            placeholder='Search For Movies'
            value = {searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
          />
          <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
        </div>
       
        {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}

          <h3 onClick={()=>{Navigate('/login')}}>logout</h3>
    </div>
    )
}





export default MovieLand