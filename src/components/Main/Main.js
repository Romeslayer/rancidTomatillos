import React from 'react'
import './Main.css'
import Card from '../Card/Card'

const Main = ({movies}) => {

     const movieCards = movies.map(movie => {
          return(
               <Card 
                 id={movie.id}
                 title={movie.title}
                 posterPath={movie.poster_path}
               />
          )
     })
     return(
          <section className='movies-section'>
               {movieCards}
          </section>
     )

}

export default Main;