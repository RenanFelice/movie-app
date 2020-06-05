import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext'
import './MovieSearchCard.css'

const MovieSearchCard = () => {
    const { movieSearchListIsFetching, movieSearchList } = useContext(MoviesContext)
    let resultPage;
    
    
    if (movieSearchList.Response === 'False') {
        resultPage = <h1 className='notFound'>Nenhum filme encontrado</h1>
    } else if (movieSearchList.Response === 'True') {
        let moviesArrFinal = [];
        let moviesId = [];
        movieSearchList.Search.forEach(item => {
            if(!moviesId.includes(item.imdbID)){
                moviesId.push(item.imdbID)
                moviesArrFinal.push(item)
            }
        })
        resultPage = <div className='SearchList'>
                        {moviesArrFinal.map(movie => (
                            
                           <React.Fragment key={movie.imdbID}>
                            <div  className='FoundMovieCard'>
                                <div className='img-container'>
                                    <img src={movie.Poster} alt=''/>
                                </div>
                                <div className='FoundMovieCard-title'>
                                    <h3>{movie.Title}</h3>
                                    <p>{movie.Year}</p>
                                </div>
                            </div>
                            <hr/>
                            </React.Fragment>
                            
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