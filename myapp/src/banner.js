import React,{useEffect,useState} from 'react'
import './banner.css';
import instance from './axios';
import requests from './request';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import {useNavigate} from "react-router-dom";

function Banner() {
    const Navigate=useNavigate();
    const [trailerUrl,setTrailerUrl]=useState("");
    let [t, sett] = useState("")
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
    const PlayMovie=(m)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer( m.name, { tmdbId: m.id } ) 
            .then((url)=>{
                const urlParam=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParam.get("v"));
                sett("");
            })
            .catch((e)=>sett(m.name))
        }
    }
    const opts={
        height: "390",width: "100%",playerVars:{autoplay:1}
    };
    return (
        <div>
        <div className='banner'style={{backgroundSize: "cover",backgroundImage:'url('+'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path+')',backgroundPosition:"center center"}}>
            <div className='banner__contents'>
                <h1>{movie?.title || movie?.name || movie?.orignal_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button' onClick={()=>{PlayMovie(movie)}}>Play </button>
                    <button className='banner__button' onClick={()=>{Navigate('/cart')}}>My List </button>
                </div>
                <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1>    
                <div className='banner--fadeBottom'></div>
            </div>   
        </div>
        {(!t)? <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}</div>: <div className="list-group-item list-group-item-action list-group-item-danger">Trailer not available for the movie {t}</div>}         
        </div>
    )
}

export default Banner;