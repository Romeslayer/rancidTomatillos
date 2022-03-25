import React from 'react'
import './Main.css'
import Card from './Card'

const Main = ({movies}) => {

     const movieCards = movies.map(movie => {
          return(
               <Card 
                 id={movie.id}
                 title={movie.title}
                 backdropPath={movie.backdrop_path}
                 avgRating={movie.avarage_rating}
                 releaseDate={movie.release_date}
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