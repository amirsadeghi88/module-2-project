import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <section className="footer-links">
              <Link to='/'> About us </Link>
              <Link to='/'> Contact us </Link>
              <Link to='/add-dogs'> Add new dog </Link>
                </section>
    </div>
  )
}

export default Footer
