import React, { Component } from 'react'
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import Movie from '../Movie/Movie.js'
import DisplayMessage from '../DisplayMessage/DisplayMessage.js'
import getData from '../../apiCalls.js'
import {Route, Switch, Redirect} from 'react-router-dom'

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
               <Redirect from='/' to='/movies' />
               <Header filter={this.filter} displayHome={this.state.singleMovie} hideMovie={this.hideMovie} err={this.state.hasError}/>
               {this.state.singleMovie && <Movie movie={this.state.singleMovie} />}
               {this.state.hasError && <DisplayMessage message={this.state.message} />}
                <Switch>

                  <Route exact path='/movies' render={ () =>  <Main movies={this.state.displayed} /> }
                  />
                  <Route exact path='/movies/:id' render={({match}) => {
                    return <Movie id={match.params.id}/>
                  }}
                  />
                  <Route path='/error' render={() => <DisplayMessage message={this.state.message} /> }
                  />
                </Switch>
               </main>

          )
     }

     componentDidMount() {
       getData('movies')
        .then(result => result['movies'])
        .then(data => {
         this.setState({movies: data, displayed:data})
        })
        .catch(err => this.setState({hasError: true, message: err.message}))
       }

}

export default App;
