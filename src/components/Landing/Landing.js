import React from 'react'
import { Link } from 'react-router-dom'

import './Landing.css'

const Landing = () => {
  return (
    <div className='landing__wrap'>
      <Link to='/signin'>
        <button>Sign In</button>
      </Link>
      <Link to='/signup'>
        <button>Sign Up</button>
      </Link>
    </div>
  )
}

export default Landing
