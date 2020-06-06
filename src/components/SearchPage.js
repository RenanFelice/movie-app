import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext'
import './SearchPage.css'

const SearchPage = () => {
    const { movieSearchListPageIsFetching, movieSearchListPage, moviePageFetchError } = useContext(MoviesContext)
    let resultPage;
    


    if (movieSearchListPage.Response === 'False') {
        resultPage = <h1 className='notFound'>Nenhum filme encontrado</h1>
    } else if (movieSearchListPage.Response === 'True') {
        let moviesArrFinal = [];
        let moviesId = [];
        movieSearchListPage.Search.forEach(item => {
            if (moviesId.indexOf(item.imdbID) === -1) {
                moviesId.push(item.imdbID)
                moviesArrFinal.push(item)
            }
        })
        resultPage = <div className='Movies-list'>
            {moviesArrFinal.map(movie => (

                <React.Fragment key={movie.imdbID}>
                    <div className='Movies-list-FoundMovieCard'>
                        <div className='Movies-list-img-container'>
                            <img src={movie.Poster} alt='' />
                        </div>
                        <div className='Movies-list-FoundMovieCard-title'>
                            <h3>{movie.Title}</h3>
                            <p>({movie.Year})</p>
                            <p>({movie.Type})</p>
                        </div>
                    </div>
                    <hr />
                </React.Fragment>

            ))}
        </div>
    } else if (moviePageFetchError) {
        resultPage = <h1 className='fetchFailed'>Algo deu errado</h1>
    }



    return (
        <>
            {movieSearchListPageIsFetching ?
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div> :

                <div className='SearchPage'>
                    <div className='SearchPage-list'>
                        {resultPage}
                    </div>
                </div>}
        </>
            );
}

export default SearchPage;