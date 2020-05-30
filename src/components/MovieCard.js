import React from 'react';
import './MovieCard.css'

const MovieCard = () => {
    return (
        <div className="card" >
            <img src="http://www.movieposters101.com/gallery/Hollywood/2013/The_Wolverine/2013/7/13/The_Wolverine_2013_Movie_Poster_5_llhzo_movieposters101(com).jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <p><i className="fas fa-star"></i> <span>7.5</span></p>
                <p className="card-text">Wolverine</p>
            </div>
        </div>
    );
}

export default MovieCard;