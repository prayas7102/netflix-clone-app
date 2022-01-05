import React from 'react';
// import {database} from './_Firebase';
// import firebase from 'firebase/compat/app';import 'firebase/compat/firestore';

import './row.css';
import {useEffect,useState} from 'react';
import instance from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseurl="https://image.tmdb.org/t/p/w500";
// const database=firebase.getFirestore();
//  const addDoc=firebase.addDoc();
//  const collection=firebase.collection();
const firebaseConfig = {
    apiKey: "AIzaSyBPMexPTruWARC6rtoiAujHtfaXYLaYZtg",
    authDomain: "netflix-clone-5be9f.firebaseapp.com",
    projectId: "netflix-clone-5be9f",
    storageBucket: "netflix-clone-5be9f.appspot.com",
    messagingSenderId: "124797017633",
    appId: "1:124797017633:web:c78f0de8a8060914e9cd60",
    measurementId: "G-EKWX062P41"
  };
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
//    async function movieList(){
//     const docRef = await addDoc(collection(database, "users"), {
//         first: "Alan",
//         middle: "Mathison",
//         last: "Turing",
//         born: 1912
//       });
//    }
//     movieList();
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
            {(!t)? <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}</div>: <div className="list-group-item list-group-item-action list-group-item-danger">Trailer not available for the movie {t}</div>} 
        </div>
        
    )
}
export default Row;