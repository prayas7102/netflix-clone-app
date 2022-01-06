import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './row.css';
import {useEffect,useState} from 'react';
import instance from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseurl="https://image.tmdb.org/t/p/w500";
function Row({title, fetchUrl,isLargeRow=false}) {
    let [t, sett] = useState("")
    const [movie, setmovie] = useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(() => {
        async function fetchData(){
            const request=await instance.get(fetchUrl);
            setmovie(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
   
const opts={
    height: "390",width: "100%",playerVars:{autoplay:1}
};

const handleClick=(m)=>{
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
const handleCart=(m)=>{
    var arr=[]
    arr.push(m);
    localStorage.setItem('Netflixclone',JSON.stringify(arr));
}
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movie.map(m=>{
                    if(isLargeRow){
                        return (
                        <div>
                        <img key={m.id} onClick={()=>handleClick(m)} src={baseurl+m.poster_path} className='row__posterLarge' alt={m.name}/>
                        <div className='large_icon'>
                            <div onClick={()=>handleCart(m)}><FontAwesomeIcon icon={faCartPlus} color='white'/> Add to Cart</div>
                            </div>
                        </div>);
                    }else{
                    return (<><FontAwesomeIcon className='small_icon' icon={faCartPlus} color='white'/><img key={m.id} className='row__poster' src={baseurl+m.backdrop_path} onClick={()=>handleClick(m)} alt={m.name}/></>) 
                }})}
            </div>
            {(!t)? <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}</div>: <div className="list-group-item list-group-item-action list-group-item-danger">Trailer not available for the movie {t}</div>} 
        </div>
        
    )
}
export default Row;
{/* <FontAwesomeIcon icon={faUser} color='white'/> */}