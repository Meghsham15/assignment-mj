import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MoivesList';

function App() {
  const[movies,setFilteredMovies] = useState([]);

  useEffect(()=>{
    setFilteredMovies(MoviesList);
  },[]);
  

  return (
    <div className="app">
      <h1>Movie Search App</h1>
      <SearchBar moviesList={movies} setFilteredMovies={setFilteredMovies} />
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
