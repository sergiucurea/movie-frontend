import React, {Component} from 'react'
import SearchSuggestionResultComponent from "./SearchSuggestionResultComponent.js"

export default class SearchSuggestionComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log("here");
      if (this.props.searchString.length>0)
            return (
            <div className="searchSuggestion">
            {
             this.props.movieArray.map((movie,i)=>(
                <SearchSuggestionResultComponent key={i} movie={movie}/>  
             ))   
            }
            </div>)
        return ""
    }
}