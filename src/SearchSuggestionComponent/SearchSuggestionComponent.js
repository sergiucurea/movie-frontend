import React, {Component} from 'react'
import SearchSuggestionResultComponent from "./SearchSuggestionResultComponent.js"

export default class SearchSuggestionComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
      const {searchString,movieArray}=this.props;
      if (searchString.length>0)
            return (
            <div className="search-suggestion">
            {
            movieArray.map((movie,i)=>(
                <SearchSuggestionResultComponent key={i} movie={movie}/>  
             ))   
            }
            </div>)
        return ""
    }
}