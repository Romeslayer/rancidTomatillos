import React, { Component } from 'react'
import movieData from '../../movieData'
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import './App.css'

class App extends Component {
     constructor() {
          super();
          this.state = {
               movies: movieData.movies,
               displayed: movieData.movies
          }
     }

      filter = (searchedTitle) => {
      this.setState({displayed: this.state.movies.filter(movie => movie.title.toLowerCase().includes(searchedTitle.toLowerCase()))
      })
     }

     render() {
          return(
               <main className='app'>
               <Header filter={this.filter} />
               <Main movies={this.state.displayed}/>
               </main>

          )
     }
}

export default App;
