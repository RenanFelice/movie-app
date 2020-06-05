import React, {useContext} from 'react';
import { MoviesContext } from '../context/MoviesContext'
import './SearchPage.css'

const SearchPage = () => {
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
        resultPage = <div className='Movies-list'>
                        {moviesArrFinal.map(movie => (
                            
                           <React.Fragment key={movie.imdbID}>
                            <div  className='Movies-list-FoundMovieCard'>
                                <div className='Movies-list-img-container'>
                                    <img src={movie.Poster} alt=''/>
                                </div>
                                <div className='Movies-list-FoundMovieCard-title'>
                                    <h3>{movie.Title}</h3>
                                    <p>({movie.Year})</p>
                                    <p>({movie.Type})</p>
                                </div>
                            </div>
                            <hr/>
                            </React.Fragment>
                            
                        ))}
                    </div>
    }



    return ( <div className='SearchPage'>
                <div className='SearchPage-list'>
                    {resultPage}
                </div>
            </div> );
}
 
export default SearchPage;