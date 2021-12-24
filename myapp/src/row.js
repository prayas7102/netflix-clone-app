import axios from 'axios';
import React from 'react'
import requests from './request';
import {useEffect,useState} from 'react';
function Row({title, fetchUrl}) {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            return request;
        }
        fetchData();
    }, []);
    return (
        <div>
            {title}
        </div>
    )
}

export default Row;
