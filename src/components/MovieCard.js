import React from 'react';
import './MovieCard.css'

const MovieCard = ({ movieData }) => {
    const score = movieData.vote_average * 10
    let colorScore;
    if (score < 50) {
        colorScore = 'rgb(163, 1, 1)'
    } else if (score >= 50 && score < 70) {
        colorScore = 'rgb(191, 224, 0)'
    } else {
        colorScore = 'rgb(44, 180, 85)'
    }
    const monthName = [null, "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    const day = movieData.release_date.slice(8)
    const month = movieData.release_date.slice(5, 7)
    const year = movieData.release_date.slice(0, 4)
    
    return (
        <div className="card" >
            <img src={`http://image.tmdb.org/t/p/w185${movieData.poster_path}`} className="card-img-top" alt={movieData.title} />
            <div className="card-body">

                <div className="score-container">
                    <svg>
                        <circle cx="28" cy="28" r="25" 
                        stroke={colorScore} 
                        strokeDasharray={156}
                        strokeDashoffset={156 - (156*score/100)}
                        strokeWidth="4" 
                        fill="#333" />
                    </svg>
                    <span className='score-points'>{score}</span>
                    <span className='percentage'>%</span>
                </div>


                <p className='card-title'>{movieData.title}</p>
                <p className='card-release-date'>{`${day} de ${monthName[parseInt(month)]}, ${year}`}</p>

            </div>
        </div>
    );
}

export default MovieCard;