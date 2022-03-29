import React from 'react'
import './Main.css'
import Card from '../Card/Card'

const Main = ({movies, displayMovie}) => {
  let movieCards
  console.log(movies)

  if (movies) {
    movieCards = movies.map(movie => {
         return(
              <Card
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                key={movie.id}
                displayMovie={displayMovie}
              />
         )
    })
  }
     return(
          <section className='movies-section'>
               {movieCards}
          </section>
     )

}

export default Main;
