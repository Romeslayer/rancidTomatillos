import React from 'react'
import './Header.css'

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

 render () {
   return (
     <header>
      <h1>Rancid Tomatillos</h1>

      {this.props.displayHome ? '' :
      <div className='styling'>
      <label className='search-label' htmlFor='search'>Search Movies</label>
      <input className='search-bar' type='text'
        placeholder='Search movies'
        name='search'
        id='search'
        value={this.state.search}
        onChange={event => this.handleChange(event)}
        />
      </div>
      }


      {this.props.displayHome ? <button
        onClick={this.props.hideMovie}>Home</button> : '' }
     </header>
   )

 }

};

export default Header;
