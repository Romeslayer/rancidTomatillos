import React, {Component} from 'react';
import './Movie.css';
import getData from '../../apiCalls.js'


class Movie extends Component {

  constructor() {
    super();
    this.state = {
      movie: null,
      genres: null,
      formatter: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }),

    }
  }

  componentDidMount = () => {
    this.displayMovie(this.props.id)
  }

  displayMovie = (id) => {
    getData(`movies`, id)
    .then(result => result.movie)
    .then(data => this.setState({movie: data, genres: data.genres.join(', ')}))
    .catch(err => console.log(err))
  }

  timeConvert = (num) => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours}:${minutes}`;
}

  render() {
    return (
      <section className='movie-section' id={this.props.id}>

        {this.state.movie ? <img className="backdrop" src={this.state.movie.backdrop_path} alt={`${this.state.movie.title}`} /> : ''}
        <div className='movie-styling'>
          {this.state.movie ? <img className="poster" src={this.state.movie.poster_path} alt={`${this.state.movie.title} promotional poster`} /> : ''}
          <div className="movie-info">
            {this.state.movie ? <h2>{this.state.movie.title}</h2> : ''}
            {this.state.movie && this.state.movie.tagline ? <p className="tagline">{this.state.movie.tagline}</p> : ''}
            {this.state.movie && this.state.movie.genres ? <p>Genres: {this.state.genres}</p> : ''}
            {this.state.movie && this.state.movie.average_rating ? <p>Average Rating: {this.state.movie.average_rating}</p> : ''}
            {this.state.movie && this.state.movie.overview ? <p>Overview: {this.state.movie.overview}</p> : ''}
            {this.state.movie && this.state.movie.runtime ? <p>Runtime: {this.timeConvert(this.state.movie.runtime)}</p>: ''}
            {this.state.movie && this.state.movie.budget ? <p>Total budget: {this.state.formatter.format(this.state.movie.budget)}</p> : ''}
            {this.state.movie && this.state.movie.revenue ? <p>Total revenue: {this.state.formatter.format(this.state.movie.revenue)}</p> : ''}
          </div>
        </div>
      </section>
    )
  }

}


export default Movie;
