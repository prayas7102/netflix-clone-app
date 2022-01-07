import React from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import './search.css';
import {useEffect,useState} from 'react';
const baseurl="https://image.tmdb.org/t/p/w500";
 function MovieSeacrh (){
    let { name } = useParams();
    let [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function findMovie(name){
            await  axios.get('https://api.themoviedb.org/3/search/movie?query='+name+'&api_key=615da8f58af156f2d18ac5e717987220&language=en-US&page=1')
            .then((data)=>{
                setMovie(data.data.results);
            })
            .catch(()=>{})
        }
        findMovie(name)
    },[]);
    async function click(m){
            await axios.get('https://api.themoviedb.org/3/movie/'+m.id+'/videos?api_key=615da8f58af156f2d18ac5e717987220&language=en-US')
            .then((data)=>{
                let str= "https://www.youtube.com/watch?v="+data.data.results[0].key;
                alert('Trailer at '+str);
            })
            .catch(()=>{alert('Trailer not available');})
    }
    if(movie.length===0){return null}
    return (
        <div>
        <h1 style={{textAlign:"center"}} className="display-5">Showing {movie.length} results for "{name}"</h1>
                { 
                movie.map((m,i)=>{
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
                                <button className='btn btn-danger' onClick={(e)=>{e.preventDefault();click(m)}}>See trailer</button>
                                </div>
                            </div></div></div>
                        </div>);
                })}
            </div>
    )
}

export default MovieSeacrh;