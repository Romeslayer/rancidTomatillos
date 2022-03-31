import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

const Card = ({id, posterPath, title}) => {
 return(
      <Link to={`/movies/${id}`} >
        <div id={id}
        className='card'>
          <img src={posterPath}
          alt={title}>
          </img>
        </div>
      </Link>
 )

}

export default Card
