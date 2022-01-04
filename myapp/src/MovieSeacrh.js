import React from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import './search.css';
import {useEffect,useState} from 'react';
import movieTrailer from 'movie-trailer';

const baseurl="https://image.tmdb.org/t/p/w500";
 function MovieSeacrh (){
    let { name } = useParams();
    let [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function findMovie(name){
            const {data} = await  axios.get('https://api.themoviedb.org/3/search/movie?query='+name+'&api_key=615da8f58af156f2d18ac5e717987220&language=en-US&page=1')
            setMovie(data.results);
        }
        findMovie(name)
        let mov=[];
        movie.map((m,key)=>{
            movieTrailer( m.name, { tmdbId: m.id } ) 
            .then((url)=>{
                console.log(url)
                mov.push(url)
                })
            .catch((e)=>mov.push('Not Available'))
        });
        console.log(mov)
    },[]);
    return (
        <div>
        <h1 style={{textAlign:"center"}} className="display-5">Showing {movie.length} results for "{name}"</h1>
                {movie.map(m=>{
                    console.log(m)
                    if(1){
                        return (
                        <div className='column container'>
                             <div className="card mb-3" style={{maxWidth: "600px"}}>
                             <div className="row ">
                             <div className="col-6"> <img key={m.id+Math.floor(Math.random() * 1000)} src={baseurl+m.poster_path} style={{maxHeight:"430px",maxWidth:"500px"}} className="img-fluid rounded-start" alt="Preview Not Available"/>
                             </div>
                             <div className="col-6">
                                <div className="card-body">
                                <h5 className="card-title">{m.original_title}</h5>
                                <p className="card-text">{m.overview}</p>
                                <p className="card-text"><small className="text-muted">Release Date {m.release_date}</small></p>
                                <p className="card-text"><small className="text-muted">Adult ? {m.adult ? 'Yes':'No'}</small></p>
                                <p className="card-text"><small className="text-muted">Ratings {m.popularity}</small></p>
                                </div>
                            </div></div></div>
                        </div>);
                    }
                })}
            </div>
    )
}

export default MovieSeacrh;
