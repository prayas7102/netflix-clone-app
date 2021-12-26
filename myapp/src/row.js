import axios from 'axios';
import React from 'react'
import './row.css';
import {useEffect,useState} from 'react';
import instance from './axios';
const baseurl="https://image.tmdb.org/t/p/w500";
function Row({title, fetchUrl,isLargeRow=false}) {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request=await instance.get(fetchUrl);
            setmovie(request.data.results);
            console.log(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movie.map(m=>{
                    if(isLargeRow){
                        return (<img key={m.id} src={baseurl+m.poster_path} className='row__posterLarge' alt={m.name}/>);
                    }else{
                    return (<img key={m.id} src={baseurl+m.poster_path} className='row__poster' alt={m.name}/>) 
                }})}
            </div>
        </div>
    )
}
export default Row;