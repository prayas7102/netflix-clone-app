import React,{useEffect,useState} from 'react'
import './banner.css';
import instance from './axios';
import requests from './request';
function Banner() {
    const [movie,setmovie]=useState([]);
    useEffect(() => {
        async function fetchData(){
            const request=await instance.get(requests.fetchNetflixOrignals);
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
            return request;
        }
        fetchData();
    }, []);
    function truncate(str,n){
        return str?.length> n ? str.substr(0,n-1)+"...": str;
    }
    return (
        <div className='banner'style={{backgroundSize: "cover",backgroundImage:'url('+'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path+')',backgroundPosition:"center center"}}>
            <div className='banner__contents'>
                <h1>{movie?.title || movie?.name || movie?.orignal_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play </button>
                    <button className='banner__button'>My List </button>
                </div>
                <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1>    
                <div className='banner--fadeBottom'></div>
            </div>           
        </div>
    )
}

export default Banner;