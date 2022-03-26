import React, { Component } from 'react'
import movieData from '../../movieData'
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import Movie from '../Movie/Movie.js'
import data from '../../singlePageData.js';
import './App.css'

class App extends Component {
     constructor() {
          super();
          this.state = {
               movies: movieData.movies,
               displayed: movieData.movies,
               singleMovie: data
          }
     }

      filter = (searchedTitle) => {
      this.setState({displayed: this.state.movies.filter(movie => movie.title.toLowerCase().includes(searchedTitle.toLowerCase()))
      })


    }

    displayMovie = (event) => {
      let target = event.target.closest('.card');
      if(target.id) {
        window.location.href = `http://localhost:3000/${target.id}`
      }
    }

     render() {
          return(
               <main className='app'>
               <Header filter={this.filter} />
               {window.location.href === `http://localhost:3000/` ? <Main movies={this.state.displayed} displayMovie={this.displayMovie}/> : <Movie movie={this.state.singleMovie} />}
               </main>

          )
     }
}

export default App;
