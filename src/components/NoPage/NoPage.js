import React from 'react';
import './NoPage.css';
import {Link} from 'react-router-dom';


const NoPage = () => {

  const homeButton = (
    <Link to='/movies'>
    <button className='home-button'>Home</button>
    </Link>
  )

  return(
    <section className='no-page'>
      <h2>Sorry!</h2>
      <p>It seems that the page you're looking for is not here.</p>
      <div className='home-block'>
        <p>Go Home?</p>
        {homeButton}
      </div>
    </section>)
}

export default NoPage;
