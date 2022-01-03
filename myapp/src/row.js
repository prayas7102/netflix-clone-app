import React from 'react'
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
    // console.log(m)
    if(trailerUrl){
        setTrailerUrl("");
    }else{
        movieTrailer( m.name, { tmdbId: m.id } ) 
        .then((url)=>{
            const urlParam=new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParam.get("v"));
            // console.log(url)
            sett("");
        })
        .catch((e)=>sett(m.name))
    }
    
}
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movie.map(m=>{
                    if(isLargeRow){
                        return (<img key={m.id} onClick={()=>handleClick(m)} src={baseurl+m.poster_path} className='row__posterLarge' alt={m.name}/>);
                    }else{
                    return (<img key={m.id} src={baseurl+m.backdrop_path} onClick={()=>handleClick(m)} className='row__poster' alt={m.name}/>) 
                }})}
            </div>
            {/* <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}</div> */}
            {(!t)? <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}</div>: <div>Trailer not available for the movie {t}</div>} 
        </div>
        
    )
}
export default Row;