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

      <label htmlFor='search'>Search Movies</label>

      <input type='text'
        placeholder='Search for a specific movie'
        name='search'
        id='search'
        value={this.state.search}
        onChange={event => this.handleChange(event)}
      />

      <button>Home</button>
     </header>
   )

 }

};

export default Header;
