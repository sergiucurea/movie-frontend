import React from 'react'

const MovieComponent = (props) => {
    const {movie}=props;
    return (
    <div className="movie-component" >
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <h1>{movie.title}</h1>
        <p className="release_date"><b>RELEASE DATE: </b>{movie.release_date}</p>
        <p className="description">{movie.overview.slice(0, 300).slice(0,movie.overview.slice(0, 300).lastIndexOf(" "))} ...</p>
        <div className="rating-container">
            <div className="rating">
                <p><b>{movie.vote_average}/10</b></p>
                <p className="rating-by">by {movie.vote_count} votes</p>
            </div>
        </div>
    </div>
    )
}

export default MovieComponent