import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext'
import './MovieSearchCard.css'

const MovieSearchCard = () => {
    const { movieSearchListIsFetching, movieSearchList } = useContext(MoviesContext)
    console.log(movieSearchList)
    let resultPage;
    if (movieSearchList.Response === 'False') {
        resultPage = <h1 className='notFound'>Nenhum filme encontrado</h1>
    } else if (movieSearchList.Response === 'True') {
        resultPage = <div className='SearchList'>
                        {movieSearchList.Search.map(movie => (
                           <>
                            <div className='FoundMovieCard'>
                                <div className='img-container'>
                                    <img src={movie.Poster} alt=''/>
                                </div>
                                <div id='teste' className='FoundMovieCard-title'>
                                    <h3>{movie.Title}</h3>
                                    <p>{movie.Year}</p>
                                </div>
                            </div>
                            <hr/>
                            </>
                            
                        ))}
                    </div>
    }


    return (
        <>
            {movieSearchListIsFetching ?
                
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                
                : resultPage}
        </>
    );
}



export default MovieSearchCard;