import React from 'react'
import { useSelector } from 'react-redux'
import './profileScreen.css'
import {auth} from './_Firebase';
import Nav from './Nav'
import {selectUser} from './userSlice';
import {useNavigate} from "react-router-dom";
function Profile() {
    const Navigate=useNavigate();
    const {user}=useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav/>
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                    <div className='profileScreen__info'>
                        <img src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt="No image"/>
                        <div className='profileScreen__details'>
                            <h3>Email: {user.email}</h3>
                                <div className='profileScreen__plans'>
                                    <h3>Plans</h3>
                                    <button className='profileScreen__signOut' onClick={()=>{auth.signOut();Navigate('/')}}>
                                        Sign Out
                                    </button>
                                </div>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

export default Profile
