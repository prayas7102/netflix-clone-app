import React from 'react'
import axios from 'axios';
import React,{useEffect,useState} from 'react'
import './Nav.css';
function Nav() {
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
        <div>
            
        </div>
    )
}

export default Nav
