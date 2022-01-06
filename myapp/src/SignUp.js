import React, {useRef} from 'react'
import './SignUp.css'
// import'./store';
import {auth} from './_Firebase';
function SignUp() {
   const emailRef=useRef(null);
   const password = useRef(null);
    const register=(e)=>{
      e.preventDefault();
      auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        password.current.value
      )
      .then((user)=>{})
      .catch((e)=>{alert(e.message)})
    };
    const signin=(e)=>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(
        emailRef.current.value,
        password.current.value
      )
      .then((user)=>{})
      .catch((e)=>{alert(e.message)})
    };
    return (
        <div className='signUpScreen'>
            <form>
            <div className="mb-3">
               <label  className="form-label">Email address</label>
               <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
               <label  className="form-label">Password</label>
               <input ref={password} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={signin}>Submit</button>
            </form>
            <p className='gray'>New to Netflix?</p> <span onClick={register}><u>Sign Up now !</u></span>
        </div>
    )
}

export default SignUp
