import React, { useContext } from 'react';
import './MovieDetails.css'
import { MoviesContext } from '../context/MoviesContext'

const MovieDetails = () => {
    const {movieDetails, movieDetailsIsFetching} = useContext(MoviesContext)
    console.log(movieDetails)
    let resultPage;
    if(!movieDetails.Response) {
        resultPage = <h1>nada encontrado</h1>
    } else {
        resultPage = 
        <div>
            <h1>{movieDetails.Title}</h1>
            <h1>{movieDetails.Year}</h1>
        </div>
    }
    return ( 
    <div className='MovieDetails'>
        {resultPage}
    </div> );
}
 
export default MovieDetails;