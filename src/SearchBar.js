import React, {useState} from 'react';
import SearchIcon from "./search.svg";
import './App.css';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=804b9a2c'; 

const SearchBar = () =>{

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
       }



return (
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

)
}

export default SearchBar;