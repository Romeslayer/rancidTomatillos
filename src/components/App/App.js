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
      hasError: false,
      message: null
    }
  }

  filter = (searchedTitle) => {
    const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(searchedTitle.toLowerCase()));
    this.setState({
      displayed: filteredMovies
    });
  }

  deleteMessage = (event) => {
    event.preventDefault();
    this.setState({
      message: null
    })
  }

  changeMessage = (message) => {
    this.setState({
      message: message
    })
  }

  render() {
    const main = (
      <main className='app'>
        <Redirect from='/' to='/movies' />

        <Switch>
          <Route exact path='/movies' render={ ()=>  <Header filter={this.filter} /> } />
          <Route render={() => <Header />}   />
        </Switch>

        <Switch>
          <Route exact path='/movies' render={ () => <Main movies={this.state.displayed} /> } />
          <Route exact path='/movies/:id' render={({match}) => {
            return <Movie id={match.params.id}/>
          }}/>
          <Route path='/error' render={() => <DisplayMessage message={this.state.message} /> } />
        </Switch>
      </main>
    )

    return (
      <React.Fragment>
        {main}
      </React.Fragment>
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
