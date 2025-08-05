import React from 'react'

const login = () => {
  return (
    <div>login</div>
    <form>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button type='submit'>Login</button>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
        <p>Forgot password? <Link to='/forgot-password'>Reset Password</Link></p>
        <p>Or login with</p>
        <button>Google</button>
        <button>Facebook</button>
        <button>Apple</button>
        <p>By continuing, you agree to our <Link to='/terms'>Terms of Service</Link> and <Link to='/privacy'>Privacy Policy</Link></p>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
    </form>
  )
}

export default login