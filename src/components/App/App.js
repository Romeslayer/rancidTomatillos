import React, { Components } from 'react'
import movieData from '../../movieData'
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import './App.css'

class App extends Component {
     constructor(movieData) {
          super();
          this.state = {
               movies: movieData.movies,
               displayed: movieData.movies
          }
     }

      filter = () => {

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