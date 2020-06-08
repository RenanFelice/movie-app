import React, { useContext, useEffect } from 'react';
import './Home.css'
import MovieCard from './MovieCard'
import { MoviesContext } from '../context/MoviesContext'
import {Link} from "react-router-dom";

const Home = () => {
    const {trendingMoviesisFetching, trendingMovies, fetchTrendingMovies } = useContext(MoviesContext);

    useEffect(() => {
        const trendingMoviesFetcher = async () => await fetchTrendingMovies()
        trendingMoviesFetcher()
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let movieNewsSection;
   

        movieNewsSection =
                        <>
                        <div className="carousel-inner">

                            <div  className="carousel-item active">
                                <img src={require('../interstellar.jpg')} className="d-block w-100" alt='interstellar review' />
                                <a target="_blank" rel="noopener noreferrer" href='https://www.nydailynews.com/entertainment/movies/interstellar-movie-review-article-1.1997552'>
                                    <div className="carousel-caption">
                                        <h5>'Interstellar,' movie review</h5>
                                    </div>
                                </a>
                            </div>

                            <div  className="carousel-item">
                                <img src={require('../Melancholia.jpg')} className="d-block w-100" alt='Melancholia' />
                                <a target="_blank" rel="noopener noreferrer" href='https://thefilmstage.com/how-lars-von-trier-caused-melancholia-to-lose-the-palme-dor-to-the-tree-of-life/'>
                                    <div className="carousel-caption">
                                        <h5>How Lars von Trier Caused Melancholia to Lose the Palme d’Or to The Tree of Life</h5>
                                    </div>
                                </a>
                            </div>

                            <div  className="carousel-item">
                                <img src={require('../got.jpg')} className="d-block w-100" alt='got' />
                                <a target="_blank" rel="noopener noreferrer" href='https://www.cinemablend.com/television/2547047/game-of-thrones-ending-6-things-i-still-cant-get-over'>
                                    <div className="carousel-caption">
                                        <h5>Game of Thrones Ending: 6 Things I Still Can't Get Over</h5>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </>     
               
    

    return (
        
            <div className='Home'>
                <div className='Home-news'>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="3000">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                 
                    {movieNewsSection}
                </div>
                
            </div>
            

            <h1 className='trending'>Trending Movies</h1>

            <div className='Home-movies'>
                {trendingMoviesisFetching ||
                    trendingMovies.results.map((movieData, idx) => 
                    <Link 
                    key={movieData.id}
                    style={{ color: 'inherit', textDecoration: 'inherit'}} 
                    to={`/moviedetails/${movieData.title}`}>
                        <MovieCard  movieData={movieData} />
                    </Link>)
                }
                <div className='pseudo-element' />
            </div>
            
        </div >

    );
}

export default Home;