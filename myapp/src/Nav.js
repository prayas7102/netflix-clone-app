import React,{useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';
import { useSelector } from 'react-redux';
import {selectUser} from './userSlice';
import {useNavigate} from "react-router-dom";

function Nav({islogin=0}) {
    islogin=useSelector(selectUser);
    console.log(islogin.user.email)
    const Navigate=useNavigate();
    const [name,setname]=useState("");
    const [show,handleShow]=useState(false);
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
        <div className='nav'>
            <img className='nav__logo' src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix logo" style={{height:"30px"}}/>
                <div className='login_input' style={{marginLeft:"200px"}}>
                    <form className="search input-group mb-3" onSubmit={()=>{Navigate('/movieSearch/'+name)}} >
		                 <input className="form-control" type="text" id="search" placeholder="Search Movies" onChange={(e)=>{e.preventDefault();setname(e.target.value)}}/>
		                 <input type="submit" className="btn btn-danger" />
	                </form>
                </div>
        <div><FontAwesomeIcon icon={faCartPlus} color='white' className='cart' size="2x" onClick={()=>{Navigate('/cart')}}/></div>
        <div className='text'><b>{islogin.user.email.replace("@gmail.com", "")}</b></div>
        {(islogin)?(<div onClick={()=>{Navigate('/profile')}} className='nav__avatar' ><FontAwesomeIcon size="2x" icon={faUser}/></div>):<div className='nav__avatar'><button>Login</button></div>}
 </div>
    )
}

export default Nav;