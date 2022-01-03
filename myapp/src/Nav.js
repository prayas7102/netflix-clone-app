import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { useSelector } from 'react-redux';
import {selectUser} from './userSlice';
import {useNavigate} from "react-router-dom";
const opts={
    height: "390",width: "100%",playerVars:{autoplay:1}
};
function Nav({islogin=0}) {
    islogin=useSelector(selectUser)
    const [trailerUrl,setTrailerUrl]=useState("");
    let [t, sett] = useState("");
    const [name,setname]=useState("");
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
    const searchTrailer=async(e)=>{
        e.preventDefault();
        const request = await axios.get('https://api.themoviedb.org/3/search/movie?query='+name+'&api_key=615da8f58af156f2d18ac5e717987220&language=en-US&page=1')
        // .then((data)=>{
        //     if(trailerUrl){
        //         setTrailerUrl("");
        //     }else{
        //         console.log(data.data)
        //         movieTrailer( data.name, { tmdbId: data.id } ) 
        //         .then((url)=>{
        //             const urlParam=new URLSearchParams(new URL(url).search);
        //             setTrailerUrl(urlParam.get("v"));
        //             sett("");
        //         })
        //         .catch((e)=>sett(data.name))
        //     }
        // })
        // .catch((e)=>{console.log(e)})
    }
    return (
        <div className={(show)?'nav__black' :'nav'}>
            <img className='nav__logo' src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix logo"/>
                <div className='login_input' style={{marginLeft:"350px"}}>
                    <form className="input-group mb-3" onSubmit={searchTrailer}>
		                 <input className="form-control" type="text" id="search" placeholder="Search Movies" onChange={(e)=>{setname(e.target.value)}}/>
		                 <input type="submit" className="btn btn-danger"/>
	                </form>
                </div>
            {(islogin)?<div onClick={()=>{Navigate('/profile')}} className='nav__avatar'><FontAwesomeIcon icon={faUser} color='white'/></div>:<div className='nav__avatar'><button>Login</button></div>}
 </div>
    )
}

export default Nav;