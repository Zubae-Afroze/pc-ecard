import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
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
