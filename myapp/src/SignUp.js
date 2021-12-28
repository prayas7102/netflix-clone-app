import React from 'react'
import './SignUp.css'
function SignUp() {
    const register=(e)=>{e.preventDefault()};
    const signin=(e)=>{e.preventDefault()};
    return (
        <div className='signUpScreen'>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={signin}>Submit</button>
</form>
<span onClick={register}>New to Netflix? Sign Up now !</span>
        </div>
    )
}

export default SignUp
