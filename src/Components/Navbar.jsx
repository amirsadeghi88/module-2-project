import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <section className='nav-logo-section'>
      <Link to="/">
      <img src='./src/assets/8795094_50.png' className='logo' alt='logo'/>
      </Link>
      <h3>Dogoo</h3>
    </section>

    <section className="nav-links">
        <Link to='/'> About us </Link>
        <Link to='/'> Contact us </Link>
        <Link to='/add-dogs'> Add new dog </Link>
          </section>
          </nav>
  )
}

export default Navbar
