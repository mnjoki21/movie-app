import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"
import MovieList from ".//components/MovieList"
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [favourites , setFavourites] = useState([])

    // const getMovies = () => {
    //     fetch('http://localhost:5000/movies')
    //         .then((res) => res.json())
    //     .then((data)=> setMovies(data))
    // }


    const getMovies = async () => {
        const response = await fetch(`http://localhost:5000/movies${searchValue}`)
        const data = await response.json();
        setMovies(data)

        if (data.Search) {
            setMovies(data.Search)
        }
}
    useEffect(() => {
         getMovies(searchValue)
        // fetch(`http://localhost:5000/movies`)
        //     .then((res) => res.json())
        // .then((data)=> setMovies(data))
    }, [searchValue])

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem("react-movie-app-favourites"))
        setFavourites(movieFavourites)
    })

    const saveToLocalStorage = () => {
        localStorage.setItem("react-movie-app-favourites", JSON.stringify)
    }
    
    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie]
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);

    }

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList= favourites.filter((favourite) => favourite.imdbID !== movie.imdbID)

        setFavourites(newFavouriteList);
    }
    return (
      <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading="Movies" />
                <SearchBox searchValue={searchValue} setSearchvalue={setSearchValue} />
            <div/>    
                <div className="row">
                    
                </div> 
                <MovieList movies={movies}
                    handleFavouriteClick={AddFavourites}
                    favouriteComponent={AddFavourites} />
                    
                <div className='row d-flex align-items-center mt-4 mb-4'>
                    <MovieListHeading 
                        heading="favourites"/></div> 
                <div className="row">
                    <MovieList
                        movies={favourites}
                        handleFavouriteClick={addFavouriteMovie}
                        favouriteComponent= {RemoveFavourites}
                    
                    />

                    
                </div>
       </div>
      </div>
)

}

export default App

