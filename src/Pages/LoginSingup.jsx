import React from 'react'

import './CSS/LoginSignup.css'

const LoginSingup = () => {
  return (
    <div className='loginSignup'>
      <div className="LoginSignupContainer">
        <h1>Sign Up</h1>
        <div className='LoginSignupFields'>
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Enter Your Email' />
        <input type="password" placeholder='Password' />
      </div>
      <button>Submit</button>
      <p className="LoginSignupLogin">Already have an account? <span>Login here</span> </p>
      <div className='LoginSignupAgree'>
        <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
      </div>
      </div>
      
    </div>
  )
}

export default LoginSingup
