import React from 'react'
import './Header.css'

const homeURL = 'http://localhost:3000/'

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ search: event.target.value }, () => {
      this.props.filter(this.state.search);
    })
  }

  goHome = () => {
    window.location.href = homeURL;
  }

 render () {
   return (
     <header>
      <h1>Rancid Tomatillos</h1>
      {window.location.href === homeURL ?
        <div className='styling'>
          <label className='search-label' htmlFor='search'>Search Movies</label>
          <input className='search-bar'
            type='text'
            placeholder='Search movies'
            name='search'
            id='search'
            value={this.state.search}
            onChange={event => this.handleChange(event)} />
        </div> : ''}
      {window.location.href === homeURL ? '' : <button onClick={this.goHome}>Home</button>}
     </header>
   )

 }

};

export default Header;
