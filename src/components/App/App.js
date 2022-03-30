import React, { Component } from 'react'
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import Movie from '../Movie/Movie.js'
import DisplayMessage from '../DisplayMessage/DisplayMessage.js'
import getData from '../../apiCalls.js'
import {Route, Switch} from 'react-router-dom'

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
        const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(searchedTitle.toLowerCase()))
        this.setState({displayed: filteredMovies })

    }

    displayMovie = (event) => {
      let target = event.target.closest('.card');
      if(target.id) {
        getData(`movies`, target.id)
          .then(result => result.movie)
          .then(data => {
            this.setState({singleMovie: data})
          })
          .catch(err => console.log(err))

      }
    }

    hideMovie = (event) => {
      this.setState({singleMovie:null})
    }

    deleteMessage = (event) => {
      event.preventDefault();
      this.setState({message: null})
    }

    changeMessage = (message) => {
      this.setState({message: message})
    }


     render() {
          return(
               <main className='app'>
               <Header filter={this.filter} displayHome={this.state.singleMovie} hideMovie={this.hideMovie} err={this.state.hasError}/>
               {this.state.singleMovie && <Movie movie={this.state.singleMovie} />}
               {this.state.hasError && <DisplayMessage message={this.state.message} />}
                <Switch>
                  <Route path='/' render={ () =>  <Main movies={this.state.displayed} displayMovie={this.displayMovie}/> }
                  />
                  <Route path='/movie/:id' render={() => <Movie movie={this.state.singleMovie}/> }
                  />
                  <Route path='/error' render={() => <DisplayMessage message={this.state.message} /> }
                  />
                </Switch>
               </main>

          )
     }

     componentDidMount() {
       console.log('I am still running')

       getData('movies')
        .then(result => result['movies'])
        .then(data => {
         this.setState({movies: data, displayed:data})
        })
        .catch(err => this.setState({hasError: true, message: err.message}))
       }

}

export default App;
