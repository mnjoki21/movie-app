import React from 'react'

const MovieList = (props) => {
    const FavouriteComponent = props.FavouriteComponent;


    return (
        <>
            {props.movies.map((movie) =>
                <div className=' image-conatiner d-flex justify-content-start m-3'>
     
                    <img src={movie.Poster} alt=" poster"></img>
                    <div onClick={ () =>props.handleFavouritesClick (movie)} className='overlay d-flex align-items-center justify center'>
                        <FavouriteComponent />
                    </div>
        </div>)}
        </>
    )
}

export default MovieList