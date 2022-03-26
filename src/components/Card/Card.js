import React from 'react'
import './Card.css'

const Card = ({id, posterPath, title, displayMovie}) => {
 return(
      <div id={id}
      className='card'>
        <img src={posterPath}
        alt={title}
        onClick={event => displayMovie(event)}></img>
      </div>
 )

}

export default Card
