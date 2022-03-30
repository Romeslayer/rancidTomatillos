import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

const Card = ({id, posterPath, title, displayMovie}) => {
 return(
      <Link to={`/movie/${id}`} >
        <div id={id}
        className='card'>
          <img src={posterPath}
          alt={title}
          onClick={event => displayMovie(event)}></img>
        </div>
      </Link>
 )

}

export default Card
