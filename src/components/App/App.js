import React, { Component } from 'react'
import movieData from '../../movieData'
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import Movie from '../Movie/Movie.js'
import data from '../../singlePageData.js';
import getData from '../../apiCalls.js'
import './App.css'

class App extends Component {
     constructor() {
          super();
          this.state = {
               movies: null,
               displayed: null,
               singleMovie: null
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
               {this.state.displayed && <Main movies={this.state.displayed} displayMovie={this.displayMovie}/>}
               {this.state.singleMovie && <Movie movie={this.state.singleMovie} />}
               </main>

          )
     }

     componentDidMount() {
       getData('movies').then(result => this.setState({movies: result, displayed:result}))
     }
}

export default App;
