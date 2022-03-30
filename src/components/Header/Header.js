import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: ''
    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ searchPhrase: event.target.value }, () => {
      this.props.filter(this.state.searchPhrase);
    })
  }

 render () {
   return (
     <header>
      <h1>Rancid Tomatillos</h1>

      {this.props.displayHome || this.props.err ? '' :
      <div className='styling'>
      <label className='search-label' htmlFor='search'>Search Movies</label>
      <input className='search-bar' type='text'
        placeholder='Search movies'
        name='search'
        id='search'
        value={this.state.searchPhrase}
        onChange={event => this.handleChange(event)}
        />
      </div>
      }


      {this.props.displayHome || this.props.err ? <Link to='/'>
        <button
onClick={this.props.hideMovie}>Home</button>
        </Link> : '' }
     </header>
   )

 }

};

export default Header;
