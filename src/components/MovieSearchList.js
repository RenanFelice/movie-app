import React, { useContext } from 'react';
import './MovieSearchList.css'
import { MoviesContext } from '../context/MoviesContext'

const MovieSearchList = () => {
    const {movieSearchList} = useContext(MoviesContext)
    let resultPage;
    if(movieSearchList.Response === 'False') {
        resultPage = <h1>nada encontrado</h1>
    } else {
        resultPage = 
        <div>
            <h1>MovieSEarchList component</h1>
            
        </div>
    }
    return ( 
    <div className='MovieSearchList'>
        {resultPage}
    </div> );
}
 
export default MovieSearchList;