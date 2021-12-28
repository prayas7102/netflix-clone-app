import React,{useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSlidersH } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';
function Nav({islogin=0}) {
    const [show,handleShow]=useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
               handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className='nav'>
            <img className='nav__logo' src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix logo"/>
            {(!islogin)?<div className='nav__avatar'><FontAwesomeIcon icon={faSlidersH} color='white'/></div>:<div className='nav__avatar'><button>Login</button></div>}
        </div>
    )
}

export default Nav
