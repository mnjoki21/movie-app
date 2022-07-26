import React from 'react'

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie) => <div>
     
            <img src={movie.Poster} alt = " poster"></img>
        </div>)}
        </>
    )
}

export default MovieList