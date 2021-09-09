import React from 'react'

const Signin = () => {
  const submitHandler = () => {
    console.log('submit handler')
  }
  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </form>
      </div>
    </>
  )
}

export default Signin
