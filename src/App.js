import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"
import MovieList from ".//components/MovieList"
import MovieListHeading from './components/MovieListHeading';
//import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
//import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [favourites , setFavourites] = useState([])
    //console.log(movies)
    
    // const getMovies = () => {
    //     fetch('http://localhost:5000/movies')
    //         .then((res) => res.json())
    //     .then((data)=> setMovies(data))
    // }


    
//         if (data.Search) {
//             setMovies(data.Search)
//         }
// }
    useEffect(() => {
        //  getMovies();
        fetch('http://localhost:5000/movies')
            .then((res) => res.json())
            .then((data) =>
                setMovies(data)
                // console.log(movies)
        )

    }, [])

    // const movieData = movies.map((movie) => {
    //     <h1>{movie.Title}</h1>
    // })

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
                {/* <MovieListHeading heading="Movies" /> */}
                {/* <SearchBox searchValue={searchValue} setSearchvalue={setSearchValue} /> */}
            <div/>    
                <div className="row">
                    
               </div> 
                <MovieList movies={movies}
                    handleFavouriteClick={AddFavourites}
                    favouriteComponent={AddFavourites} />
                    {/* //{console.log(movies)} */}
                    
                {/* <div className='row d-flex align-items-center mt-4 mb-4'>
                    <MovieListHeading 
                        heading="favourites"/></div>  */}
                <div className="row">
                    <MovieList
                        movies={favourites}
                        handleFavouriteClick={addFavouriteMovie}
                        favouriteComponent= {removeFavouriteMovie}
                    
                    />

                    
    //             </div>
    //    </div>
    //   </div>
    //     <>
           

    //         <div>Hello Mitch Rapp</div>
           
    //                  <MovieList movies={movies}/>
    //                 {/* // handleFavouriteClick={AddFavourites}
    //                     // favouriteComponent={AddFavourites} */}
                    
   
               
    // {/* {movies} */}
    // </>
)

}

export default App

// import React, { useState ,useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import MovieList from "./components/MovieList";
// import MovieListHeadings from "./components/MovieListHeadings";
// import SearchBox from "./components/SearchBox";
// import AddFavourite from "./components/AddFavourite";
// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchValue, setSearchValue] = useState()
// useEffect(() => {
//     fetch(`http://localhost:8000y/movie?api_key=${searchValue}`)
//     .then((res) => res.json())
//     .then((data) => setMovies(data))
// },[searchValue])
// // const getMovieRequest = async () => {
// // const url='http://localhost:5000/movie'
// // const response = await fetch (url);
// // const responseJson = await response.json();
// // console.log(responseJson);
// // setMovies(responseJson.Search)
// // };
//     return (
//       <div className='container-fluid movie-app'>
//         <div className='row '>
//           <MovieListHeadings heading= 'Movies' />
//           <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}    />
//         </div>
//       <div className='row '>
//          <MovieList movies = {movies} favourite component= {AddFavourite} />
//       </div>
//       </div>
// )
// }
// export default App;






