import React from 'react'

const SearchSuggestionResultComponent=(props)=>{
    return <div className="SearchSuggestionResultComponent rows">
         <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}/>
         <div className="details columns">
         <h1><b>{props.movie.title}</b></h1>
         <p>{props.movie.overview.slice(0, 100).slice(0, props.movie.overview.slice(0, 100).lastIndexOf(" "))} ...</p>
         <p className="bottom"><i>Release Date: {props.movie.release_date}</i></p>
         <p className="bottom"><i>Rating: {props.movie.vote_average}/10</i></p>
         </div>
    </div>
}

export default SearchSuggestionResultComponent