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

      filter = (event) => {
      let searchTitle = event.target.value
      this.setState({displayed: this.movies.filter(movie => movie.title.toLowerCase.includes(searchTitle.toLowerCase))
      })
     }

     render() {
          return(
               <main className='App'>
               <Header filter={this.filter} />
               <Main movies={this.state.displayed}/>
               </main>

          )
     }
}

export default App;