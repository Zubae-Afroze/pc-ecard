import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  const submitHandler = () => {
    console.log('submit handler')
  }
  return (
    <>
      <div>
        <Link to='/'>Back</Link>
        <form onSubmit={submitHandler}>
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
          <button>Sign In</button>
        </form>
      </div>
    </>
  )
}

export default Signin
