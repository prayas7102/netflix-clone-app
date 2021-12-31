import React,{useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';
import { useSelector } from 'react-redux';
import {selectUser} from './userSlice';
import {useNavigate} from "react-router-dom";
function Nav({islogin=0}) {
    islogin=useSelector(selectUser)
    const [show,handleShow]=useState(false);
    const Navigate=useNavigate();
    const transition = ()=>{
        if(window.scrollY>100){
            handleShow(true);
         }else{
             handleShow(false);
         }
    }
    useEffect(() => {
        window.addEventListener("scroll",transition);
        return () => {
            window.removeEventListener("scroll",transition);
        };
    }, []);
    return (
        <div className={(show)?'nav__black' :'nav'}>
            <img className='nav__logo' src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix logo"/>
            {(islogin)?<div onClick={()=>{Navigate('/profile')}} className='nav__avatar'><FontAwesomeIcon icon={faUser} color='white'/></div>:<div className='nav__avatar'><button>Login</button></div>}
        </div>
    )
}

export default Nav;