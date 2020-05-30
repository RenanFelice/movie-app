import React, { useContext } from 'react';
import './Home.css'
import MovieCard from './MovieCard'
import { MoviesContext } from '../context/MoviesContext'

const Home = () => {
    const { movieNews, movieIsFetching, trendingMoviesisFetching, trendingMovies } = useContext(MoviesContext);
    console.log(trendingMovies)

    return (
        <div className='Home'>
            <div className='Home-news'>
                {movieIsFetching ||
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>



                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img src={movieNews[0].urlToImage} className="d-block w-100" alt={movieNews[0].description} />
                                <a target="_blank" rel="noopener noreferrer" href={movieNews[0].url}>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{movieNews[0].title}</h5>
                                    </div>
                                </a>
                            </div>

                            <div className="carousel-item">
                                <img src={movieNews[1].urlToImage} className="d-block w-100" alt={movieNews[1].description} />
                                <a target="_blank" rel="noopener noreferrer" href={movieNews[1].url}>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{movieNews[1].title}</h5>
                                    </div>
                                </a>
                            </div>

                            <div className="carousel-item">
                                <img src={movieNews[2].urlToImage} className="d-block w-100" alt={movieNews[2].description} />
                                <a target="_blank" rel="noopener noreferrer" href={movieNews[2].url}>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{movieNews[2].title}</h5>
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

                    </div>
                }
            </div>
            <h1 className='trending'>Trending Movies</h1>
            <div className='Home-movies'>
                {trendingMoviesisFetching ||
                    trendingMovies.results.map(movieData => <MovieCard key={movieData.id} movieData={movieData} />)
                }
            </div>
        </div >);
}

export default Home;