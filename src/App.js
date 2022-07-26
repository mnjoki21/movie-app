import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MovieList from ".//components/MovieList"

const App = () => {
    const [movies, setMovies] = useState ([])

    // const getMovies = () => {
    //     fetch('http://localhost:5000/movies')
    //         .then((res) => res.json())
    //     .then((data)=> setMovies(data))
    // }


//     const getMovies = async () => {
//         const response = await fetch('http://localhost:5000/movies')
//         const data = await response.json();
//         setMovies(data)
// }
    useEffect(() => {
        // getMovies()
        fetch('http://localhost:5000/movies')
            .then((res) => res.json())
        .then((data)=> setMovies(data))
    },[])
    return (
        <div className ="container-fluid">
            <MovieList movies={movies} />

        </div>
    )
}

export default App

