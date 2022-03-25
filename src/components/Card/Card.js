import React from 'react' 
import './Card.css'

const Card = ({id, posterPath, title}) => {
 return(
      <a href={`http://localhost:3000/${id}`}>
      <div id={id} className='card'>
        <img src={posterPath} alt={title}></img>
      </div>
      </a>
 )

} 

export default Card