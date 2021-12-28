import React from 'react'
import './App.css';
import Row from './row';
import requests from './request';
import Banner from './banner';
import Nav from './Nav';
function Home() {
    return (
        <div>
            <Nav/>
            <Banner/>
             <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOrignals} isLargeRow/>
             <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
             <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
             <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
             <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
             <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
             <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        </div>
    )
}

export default Home
