import React from 'react'

const MovieComponent = (props) => { 
    
    return <div className="MovieComponent " >
 
     <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}/>
     <h1>{props.movie.title}</h1>
     <p className="release_date"><b>RELEASE DATE: </b>{props.movie.release_date}</p>
     <p className="description">{props.movie.overview.slice(0,300).slice(0,props.movie.overview.slice(0,300).lastIndexOf(" "))} ...</p>
     <div className="rating-container">
     <div className="rating">
        <p><b>{props.movie.vote_average}/10</b></p>
        <p className="rating-by">by {props.movie.vote_count} votes</p>
     </div>
     </div>
    </div>
}

export default MovieComponent