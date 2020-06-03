import React, { useContext } from 'react';
import './Home.css'
import MovieCard from './MovieCard'
import { MoviesContext } from '../context/MoviesContext'

const Home = () => {
    const { movieNews, movieIsFetching, trendingMoviesisFetching, trendingMovies } = useContext(MoviesContext);
    let movieNewsSection;
    if (!movieNews.status) {
        movieNewsSection = <img alt='notFound' src={require('../notfound.jpg')} className='fetchFailed' />
    } else {

        movieNewsSection =
                        <>
                        <div className="carousel-inner">

                            <div  className="carousel-item active">
                                <img src={movieNews.articles[0].urlToImage} className="d-block w-100" alt={movieNews.articles[0].description} />
                                <a target="_blank" rel="noopener noreferrer" href={movieNews.articles[0].url}>
                                    <div className="carousel-caption">
                                        <h5>{movieNews.articles[0].title}</h5>
                                    </div>
                                </a>
                            </div>

                            <div  className="carousel-item">
                                <img src={movieNews.articles[1].urlToImage} className="d-block w-100" alt={movieNews.articles[1].description} />
                                <a target="_blank" rel="noopener noreferrer" href={movieNews.articles[1].url}>
                                    <div className="carousel-caption">
                                        <h5>{movieNews.articles[1].title}</h5>
                                    </div>
                                </a>
                            </div>

                            <div  className="carousel-item">
                                <img src={movieNews.articles[2].urlToImage} className="d-block w-100" alt={movieNews.articles[2].description} />
                                <a target="_blank" rel="noopener noreferrer" href={movieNews.articles[2].url}>
                                    <div className="carousel-caption">
                                        <h5>{movieNews.articles[2].title}</h5>
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
               
    }

    return (
        
            <div className='Home'>
                <div className='Home-news'>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="3000">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                {movieIsFetching ?
                    <div className='Home-news-loading'>
                            <div className="loading">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    :    
                    movieNewsSection}
                </div>
            </div>
            

            <h1 className='trending'>Trending Movies</h1>

            <div className='Home-movies'>
                {trendingMoviesisFetching ||
                    trendingMovies.results.map((movieData, idx) => <MovieCard key={movieData.id} movieData={movieData} />)
                }
                <div className='pseudo-element' />
            </div>

        </div >

    );
}

export default Home;