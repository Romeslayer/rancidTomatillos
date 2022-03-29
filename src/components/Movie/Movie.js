import React from 'react';
import './Movie.css';
import getData from '../../apiCalls.js'

const Movie = (movie) => {
  movie = movie.movie;
  let genres = movie.genres.join(', ');
  let formatter = new Intl.NumberFormat('en-US', {
style: 'currency',
currency: 'USD',
})

const timeConvert = (num) => {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return `${hours}:${minutes}`;
}

  return (
    <section className='movie-section' id={movie.id}>
      <img className="backdrop" src={movie.backdrop_path} alt={`${movie.title}`} />
      <div className='movie-styling'>
        <img className="poster" src={movie.poster_path} alt={`${movie.title} promotional poster`} />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p className="tagline">{movie.tagline}</p>
          {movie.genres ? <p>Genres: {genres}</p> : ""}
          {movie.average_rating ? <p>Average Rating: {movie.average_rating}</p> : ""}
          {movie.overview ? <p>Overview: {movie.overview}</p> : ""}
          {movie.runtime ? <p>Runtime: {timeConvert(movie.runtime)}</p> : ""}
          { movie.budget ? <p>Total budget: {formatter.format(movie.budget)}</p> : ""}
          { movie.revenue ? <p>Total revenue: {formatter.format(movie.revenue)}</p> : ""}
        </div>
      </div>

    </section>
  )
}


export default Movie;
