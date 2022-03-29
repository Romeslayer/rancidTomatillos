import React, { Component } from 'react'
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import Movie from '../Movie/Movie.js'
import getData from '../../apiCalls.js'
import './App.css'

class App extends Component {
     constructor() {
          super();
          this.state = {
               movies: null,
               displayed: null,
               singleMovie: null,
               hasError: false,
               message: null
          }
     }



      filter = (searchedTitle) => {
      this.setState({displayed: this.state.movies.filter(movie => movie.title.toLowerCase().includes(searchedTitle.toLowerCase()))
      })


    }

    displayMovie = (event) => {
      let target = event.target.closest('.card');
      if(target.id) {
        getData(`movies`, target.id).then(result => {
          this.setState({singleMovie: result})
        })

      }
    }

    hideMovie = (event) => {
      event.preventDefault();
      this.setState({singleMovie:null})
    }

    deleteMessage = (event) => {
      event.preventDefault();
      this.setState({message: null})
    }

    changeMessage = (message) => {
      this.setState({message: message})
    }

    componentDidCatch(error, info) {
      this.setState({hasError: true});
    }

     render() {
          return(
               <main className='app'>
               <Header filter={this.filter} displayHome={this.state.singleMovie} hideMovie={this.hideMovie} error={this.state.hasError} />
               {this.state.displayed && !this.state.singleMovie && !this.state.hasError && <Main movies={this.state.displayed} displayMovie={this.displayMovie}/>}
               {this.state.singleMovie && <Movie movie={this.state.singleMovie} />}
               </main>

          )
     }

     componentDidMount() {
       console.log('I am still running')

       getData('movies')
       .then(data => {
        this.setState({movies: data, displayed:data})
       })
     }


}

export default App;
