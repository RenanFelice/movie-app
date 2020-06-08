import React, { useContext, useEffect } from 'react';
import './MovieDetails.css'
import { MoviesContext } from '../context/MoviesContext'
import { withRouter } from "react-router-dom";

const MovieDetails = (props) => {
    const { movieDetails, movieDetailsIsFetching, fetchMovieDetails, actorsDataObj, actorIsFetching } = useContext(MoviesContext);


    useEffect(() => {
        const movieDetailsFetcher = async () => await fetchMovieDetails(props.match.params.moviename)
        movieDetailsFetcher()
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let resultPage;

    if (movieDetails.Response === "False") {
        resultPage = <h1>Algo deu errado, tente novamente mais tarde</h1>
    } else if (movieDetails.Response === "True") {
        resultPage =
            <>
                <div className='MovieDetails-Banner'>
                    <div className='MovieDetails-Banner-Body'>
                        <img src={movieDetails.Poster} alt={movieDetails.Title}></img>
                        <div className='MovieDetails-Banner-Body-Details'>
                            <h1>{movieDetails.Title}<span> ({movieDetails.Year})</span></h1>
                            <p className='Subtitle'><span>{movieDetails.Rated}</span><span>{movieDetails.Genre}</span><span>•</span><span>{movieDetails.Runtime}</span></p>
                            <p className='Scores'><i className="fab fa-imdb"></i><span>{movieDetails.Ratings[0] ? movieDetails.Ratings[0].Value : 'N/A'}</span></p>
                            <p className='Plot'><span className='Overview'>Overview</span><i>{movieDetails.Plot}</i></p>
                            <p className='Director'><span>{movieDetails.Director}</span><span>Director</span></p>
                        </div>
                    </div>
                </div>

                <div className='Actors-Container'>
                    <div className='Actors-Title'>Main Cast</div>
                    {actorIsFetching || !actorsDataObj ? <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div> 
                
                : <div className='Actors-Card-List'>
                        {actorsDataObj ? actorsDataObj.map(actor => {
                            return <div key={actor.results[0].name} className='Actor-Card'>
                                <img alt={actor.results[0].name} src={`https://image.tmdb.org/t/p/w185${actor.results[0].profile_path}`} />
                                <p>{actor.results[0].name}</p>
                            </div>
                        }) : <h1>não sei</h1>}
                    </div>}
                    
                </div>
            </>
    }
    return (
        <div className='MovieDetails'>
            {movieDetailsIsFetching
                ? <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
                : resultPage}
        </div>
    );
}

export default withRouter(MovieDetails);