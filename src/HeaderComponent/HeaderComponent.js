import React, {Component} from 'react'
import SearchSuggestionComponent from '../SearchSuggestionComponent/SearchSuggestionComponent';
import SearchService from '../Services/SearchService';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString:"",
            movieArray:[]
        }   
    }

    search(event){
        let x=event.keyCode
        if(x==13){
            props.searchHitEnter();
            return;
        }
        SearchService.getSearchSuggestion(document.getElementById("searchBar").value).then(result=>{
        this.setState({
            movieArray:result,
            searchString:document.getElementById("searchBar").value
        
        })
        console.log(this.state.movieArray)
     })
    }

    render() {
        return <div className="HeaderComponent" >
            <ul className="topnav">
                <li><a className="title" href="#home" >movieDB</a></li>
                <li><input type="text" placeholder="Search....." id="searchBar" onKeyUp={()=>this.search(event)}/></li>
                <li><SearchSuggestionComponent searchString={this.state.searchString} movieArray={this.state.movieArray}/></li>
            </ul>
           
        </div>
    }
}
