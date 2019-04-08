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
            console.log("Enter has been hit");
            this.props.searchEntered(document.getElementById("searchBar").value);
            this.setState({
                searchString:"",
                movieArray:[]
            }) 
            return
        }
    }

    componentDidMount(){
        let searchBar=document.getElementById("searchBar");
        const debounce=(func,delay)=>{
            let debounceTimer         
            return function(){
                const context=this;
                const args=arguments;
                clearTimeout(debounceTimer);
                debounceTimer=setTimeout(()=>func.apply(context,args),delay)
            }
        }
        searchBar.addEventListener('keyup',debounce(function(event){
            SearchService.getSearchSuggestion(document.getElementById("searchBar").value).then(result=>{
                let x=event.keyCode
                if(x==13){
                    this.props.searchEntered(document.getElementById("searchBar").value);
                    this.setState({
                        searchString:"",
                        movieArray:[]
                    })
                    document.getElementById("searchBar").value="";
                    return;
                }
                this.setState({
                    movieArray:result,
                    searchString:document.getElementById("searchBar").value
                
                })
             })        
        }.bind(this),200))
    }

    render() {
        return <div className="HeaderComponent" >
            <ul className="topnav">
                <li><a className="title" href="#home" >movieDB</a></li>
                <li><input type="text" placeholder="Search....." id="searchBar" /></li>
                <li><SearchSuggestionComponent searchString={this.state.searchString} movieArray={this.state.movieArray}/></li>
            </ul>
           
        </div>
    }
}
