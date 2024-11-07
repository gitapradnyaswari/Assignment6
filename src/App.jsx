import React, { useState, useEffect } from 'react';
import Search from './components/Search.jsx';
import Header from './components/Header.jsx';
import Movie from './components/Movie.jsx';
import './App.css';

const API_URL = 'https://www.omdbapi.com/?apikey=ed60d079&s=';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const fullUrl = `${API_URL}${query}`;
      console.log('Fetching from URL:', fullUrl);
      const response = await fetch(fullUrl);
      const data = await response.json();
      console.log('Response data:', data);
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        console.error('No movies found or an error occurred:', data.Error);
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies('iron man');
  }, []);

  return (
    <div className="App">
      <Header />
      <h2 className="title">
        Show your favorite movies
      </h2>
      <Search onSearch={fetchMovies} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-list">
          {movies.length > 0 ? (
            movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
          ) : (
            <p>No movies found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;