import React from 'react'
import Nav from './Nav'
import {useParams} from "react-router-dom";
import axios from 'axios';
import './search.css';
import {useEffect,useState} from 'react';
import instance from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const opts={
    height: "390",width: "100%",playerVars:{autoplay:1}
};

const baseurl="https://image.tmdb.org/t/p/w500";
 function MovieSeacrh (){
    let { name } = useParams();
    const [movie,setMovie]=useState([]);
    let [t, sett] = useState("")
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(()=>{
        async function findMovie(name){
            const {data} = await  axios.get('https://api.themoviedb.org/3/search/movie?query='+name+'&api_key=615da8f58af156f2d18ac5e717987220&language=en-US&page=1')
            setMovie(data.results)
        }
        findMovie(name)
    },[]);
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
    return (
           <div className='column'>
                {movie.map(m=>{
                    if(1){
                        {console.log(m.id,m.poster_path)}
                        return (<img key={m.id} src={baseurl+m.poster_path} className='image' alt={m.name}/>);
                    }
                })}
                 {(!t)? <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}</div>: <div>Trailer not available for the movie {t}</div>} 
            </div>
    )
}

export default MovieSeacrh;
