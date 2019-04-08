import React, {Component} from 'react'
import SearchSuggestionComponent from '../SearchSuggestionComponent/SearchSuggestionComponent';
import {SearchService} from '../Services/SearchService';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString:"",
            movieArray:[]
        }   
     this.handleSearchInput=this.handleSearchInput.bind(this);
     this.handleSearch=this.handleSearch.bind(this);
 
        }

    componentDidMount(){
        const searchBar=document.getElementById("searchBar");
        const debounce=(func,delay)=>{
            let debounceTimer         
            return function(){
                const context=this;
                const args=arguments;
                clearTimeout(debounceTimer);
                debounceTimer=setTimeout(()=>func.apply(context,args),delay)
            }
        }
        searchBar.addEventListener('keyup',debounce(this.handleSearch,200))
    }

    componentWillUnmount(){
        searchBar.removeEventListener('keyup',debounce(this.handleSearch,200));
    }

    handleSearch(event){
        const {searchEntered}=this.props;
        SearchService.getSearchSuggestion(this.state.searchString).then(result=>{
            const keyCodeEntered=event.keyCode
            if(keyCodeEntered==13){
                searchEntered(this.state.searchString);
                this.setState({
                    searchString:"",
                    movieArray:[]
                })
                return;
            }
            this.setState({
                movieArray:result            
            })
         })        
    }

    handleSearchInput(event){
        const target=event.target;
        this.setState({
            searchString:target.value
        })
    }

    render() {
        return <div className="header-component" >
            <ul className="topnav">
                <li><a className="title" href="#home" >movieDB</a></li>
                <li><input type="text" placeholder="Search....." id="searchBar" value={this.state.searchString} onChange={this.handleSearchInput} /></li>
                <li><SearchSuggestionComponent searchString={this.state.searchString} movieArray={this.state.movieArray}/></li>
            </ul>          
        </div>
    }
}
