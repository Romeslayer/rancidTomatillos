import React from 'react'
import './DisplayMessage.css'

const DisplayMessage = ({message}) => {

     return(
          <div className='display-message'>
               <h2>Error</h2>
               <p>{message}</p>
          </div>
     )
} 

export default DisplayMessage;