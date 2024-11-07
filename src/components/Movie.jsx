const Movie = ({ movie }) => {
  const poster = (movie.Poster && movie.Poster !== 'N/A') ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image';
  
  return (
    <div className="movie">
      <img src={poster} alt={movie.Title !== 'N/A' ? movie.Title : 'No Image'} />
      <div className="movie-title">
        {movie.Title !== 'N/A' ? movie.Title : 'No Title'}
      </div>
    </div>
  );
};

export default Movie;