import React, { createContext, useEffect, useState } from 'react';

export const MoviesContext = createContext()

const MovieContextProvider = (props) => {
    const [movieNews, setMovieNews] = useState([]);
    const [movieIsFetching, setMovieIsFetching] = useState(true)

    const fetchMovieNews = async () => {
        try {
            let date = new Date().toString()
            let day = date.slice(8, 10)
            let month = date.slice(4, 7)
            let year = date.slice(11, 15)

            const url = 'http://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?' +
                'q=series%20movies&' +
                `from=${year}-${month}-${day - 1}&` +
                'sortBy=popularity&' +
                'apiKey=918b1bc0a5714706a4f8ba48451af8a3';

            setMovieIsFetching(true)
            await fetch(url).then(resp => resp.json()).then(data => setMovieNews([data.articles[0],data.articles[1],data.articles[2]]))
            setMovieIsFetching(false)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const movieFetcher = async () => await fetchMovieNews()
        movieFetcher()
    }, [])


    return (
        <MoviesContext.Provider value={{movieNews, movieIsFetching}}>
            {props.children}
        </MoviesContext.Provider>);
}

export default MovieContextProvider;