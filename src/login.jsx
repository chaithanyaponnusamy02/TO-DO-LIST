import React from 'react'

const login = () => {
  return (
    <div>login</div>
    <form>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button type='submit'>Login</button>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
    </form>
  )
}

export default login