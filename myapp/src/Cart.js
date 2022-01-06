import React from 'react'

function Cart() {
    var movie=JSON.parse(localStorage.getItem('Netflixclone'));
    console.log(movie)
    return (
        <div>
            {movie.map((m,k)=>{
                 <div className="row ">
                 <div className="col-6"></div></div>
            })}
        </div>
    )
}

export default Cart
