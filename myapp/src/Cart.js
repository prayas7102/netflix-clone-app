import React from 'react'
import './cart.css'
import axios from 'axios';
import {useEffect,useState} from 'react';
function Cart() {
    const baseurl="https://image.tmdb.org/t/p/w500";
    let [movie,setMovie]=useState([]);
    movie=JSON.parse(localStorage.getItem('Netflixclone'));
    movie)
    function deleteMovie(m){
        var index = movie.indexOf(m);
    if (index > -1) {
        setMovie(movie.splice(index, 1));
        localStorage.setItem('Netflixclone',JSON.stringify(movie));
        }
    }
    return (
        <div className="row">
            <h1 className='heading'>There are {movie.length} movie items in your cart list !!</h1>
            <div className='row'>
            {movie.map((m,k)=>{
                 return (
                 <div key={m.id} className='col' style={{margin:"30px"}}>
                 <img  src={baseurl+m.poster_path} className='row__posterLarge' alt={m.name}/>
                 <h2 className=''>{m.price}</h2>
                 <div><button onClick={(e)=>{deleteMovie(m)}} className='btn btn-danger'>Delete From Cart</button>
                 </div>
                 </div>)
            })}
            </div>
        </div>
    )
}

export default Cart
 // var [link,setLink]=useState([]);
    // useEffect(()=>{
    //     movie.map(async(m)=>{
    //         const data=await axios.get('https://api.themoviedb.org/3/movie/'+m.id+'/videos?api_key=615da8f58af156f2d18ac5e717987220&language=en-US')
    //         data)
    //     });
    // },[]);