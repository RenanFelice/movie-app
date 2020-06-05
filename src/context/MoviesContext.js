import React, { createContext, useEffect, useState } from 'react';

export const MoviesContext = createContext()

const MovieContextProvider = (props) => {
    const [movieNews, setMovieNews] = useState([]);
    const [movieIsFetching, setMovieIsFetching] = useState(true);
    const [trendingMovies, setIsTrendingMovies] = useState([]);
    const [trendingMoviesisFetching, setIsTrendingMoviesIsFetching] = useState(true);
    const [movieSearchList, setMovieSearchList] = useState([])
    const [movieSearchListIsFetching, setMovieSearchListIsFetching] = useState(true)

    const fetchMovieNews = async () => {
        try {
            let date = new Date().toString()
            let day = date.slice(8, 10)
            let month = date.slice(4, 7)
            let year = date.slice(11, 15)

            const url = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?' +
                'q=series%20movies&' +
                `from=${year}-${month}-${day - 1}&` +
                'sortBy=popularity&' +
                'apiKey=918b1bc0a5714706a4f8ba48451af8a3';

            setMovieIsFetching(true)
            await fetch(url).then(resp => {
                if (!resp.ok) {
                    throw Error(resp.status + ' - ' + resp.statusText)
                }
                return resp.json()
            })
                .then(data => setMovieNews(data))
            setMovieIsFetching(false)
        }
        catch (e) {
            console.log(e)
            setMovieIsFetching(false)

        }
    }

    const fetchTrendingMovies = async () => {

        const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=28a82646b1277a985950211180536637'
        setIsTrendingMoviesIsFetching(true)
        await fetch(url).then(resp => resp.json()).then(data => setIsTrendingMovies(data))
        setIsTrendingMoviesIsFetching(false)
    }

    const fetchMovieSearchList = async (searchText) => {
        try {
            setMovieSearchListIsFetching(true)
            const url = `https://www.omdbapi.com/?apikey=5b5e06de&s=${searchText}`
            await fetch(url).then(resp => {
                if (!resp.ok) {
                    throw Error(resp.status + ' - ' + resp.statusText)
                }
                return resp.json()
            })
                .then(data => setMovieSearchList(data))
            setMovieSearchListIsFetching(false)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const movieNewsFetcher = async () => await fetchMovieNews()
        movieNewsFetcher()
        const trendingMoviesFetcher = async () => await fetchTrendingMovies()
        trendingMoviesFetcher()
    }, [])




    return (
        <MoviesContext.Provider value={{ movieNews, movieIsFetching, trendingMovies, trendingMoviesisFetching, movieSearchListIsFetching, movieSearchList, fetchMovieSearchList, setMovieSearchListIsFetching }}>
            {props.children}
        </MoviesContext.Provider>);
}

export default MovieContextProvider;