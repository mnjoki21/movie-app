// // import React from 'react'

// // const MovieList = (props) => {
// //     const FavouriteComponent = props.FavouriteComponent;


// //     return (
// //         <>
// //            {props.movies.map((movie) => (
// //            <div
// //             className="d-flex justify-content-start m-3">
// //              <img src={movie.Poster} alt='movies'></img>
// //            </div>
// //            ))}
// //         </>
// //     )
// // }
// // export default MovieList

// import React from 'react'
// const MovieList = (props) => {
//     //console.log(props.movies)
//     return (
//         <>
//            {props.movies.map((movie, index) => (
//            <div
//             className="d-flex justify-content-start m-3">
//              <img src={movie.Poster} alt='movies'></img>
//            </div>
//            ))}
//         </>
//     )
// }
// export default MovieList

import React from 'react'

const MovieList = (props) => {
    console.log(props)
  return (
      
    <>
    
           {props.movie && props.movies.map((movie) => (
           <div
            className="d-flex justify-content-start m-3">
             <img src={movie.Poster} alt='movies'></img>
           </div>
           ))}      
      </>
  )
}

export default MovieList