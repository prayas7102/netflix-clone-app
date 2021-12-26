const api='615da8f58af156f2d18ac5e717987220';
const requests={
    fetchTrending: '/trending/all/week?api_key='+api+'&language=en-US',
    fetchNetflixOrignals:'/discover/tv?api_key='+api+'&7with_networks=213',
    fetchTopRated:'/movie/top_rated?api_key='+api+'&language=en-US',
    fetchActionMovies:'/discover/movie/?api_key='+api+'&with_genres=28',
    fetchComedyMovies:'/discover/movie/?api_key='+api+'&with_genres=35',
    fetchHorrorMovies:'/discover/movie/?api_key='+api+'&with_genres=27',
    fetchRomanceMovies:'/discover/movie/?api_key='+api+'&with_genres=10749',
    fetchDocumentaries:'/discover/movie/?api_key='+api+'&with_genres=99'
}
export default requests;