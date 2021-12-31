import React from 'react'
import './login.css';
import Nav from './Nav';
import {useEffect,useState} from 'react';
import SignUp from './SignUp';
function LoginScreen() {
    const islogin=1;
    const [signIn, setsignIn] = useState(true)
    return (
        <div className='loginscreen'>
            <Nav islogin/>
            <div className="gradient"></div>
            <div className='body'>
                {signIn ? <SignUp/>:(
                <>
                <h1>Unlimited TV programs and more...</h1>
                <div className='login_input'>
                    <div className="input-group mb-3">
		                 <input className="form-control" type="text" id="search" placeholder="Search Movies" name="[search]" />
		                 <button type="submit" className="btn btn-danger" onClick={()=>setsignIn(true)}>Submit</button>
	                </div>
                </div>
                </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen;
