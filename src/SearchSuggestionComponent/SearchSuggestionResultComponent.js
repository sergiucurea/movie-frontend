import React from 'react'

const SearchSuggestionResultComponent=(props)=>{
    const {movie}=props;
    return <div className="search-suggestion-result-component rows">
         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
         <div className="details columns">
         <h1><b>{movie.title}</b></h1>
         <p>{movie.overview.slice(0, 100).slice(0,movie.overview.slice(0, 100).lastIndexOf(" "))} ...</p>
         <p className="bottom"><i>Release Date: {movie.release_date}</i></p>
         <p className="bottom"><i>Rating: {movie.vote_average}/10</i></p>
         </div>
    </div>
}

export default SearchSuggestionResultComponent