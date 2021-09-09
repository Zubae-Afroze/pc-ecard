import React from 'react'

const Signup = () => {
  const submitHandler = () => {
    console.log('Submitted')
  }

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Sign Up</button>
          <button>Log In with Google</button>
          <p>Already have an account?</p>
          <a href='/'>Sign In</a>
        </form>
      </div>
    </>
  )
}

export default Signup
