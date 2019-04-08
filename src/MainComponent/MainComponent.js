import React, {Component} from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent.js';
import SideComponent from '../SideComponent/SideComponent.js'
import MovieComponent from '../MovieComponent/MovieComponent.js';
import {MovieService} from '../Services/MovieService.js';
import { throwStatement } from 'babel-types';
import SearchService from '../Services/SearchService.js';
export default class MainComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
        movieArray:[],
        loading:true,
        pageIndex:1,
        category:[],
        searchString:""
        }
        this.trackScrolling=this.trackScrolling.bind(this);
        this.loadMovies=this.loadMovies.bind(this);
        this.loadMoviesFiltered=this.loadMoviesFiltered.bind(this);
        this.searchEntered=this.searchEntered.bind(this);
        this.applyFilters=this.applyFilters.bind(this);
    }

    dislayByName(searchStringy,page,limit){
        SearchService.getSearchSuggestion(searchStringy,page,limit).then(result=>{
            this.setState({
                movieArray:this.state.movieArray.concat(result),
                loading:false,
                pageIndex:this.state.pageIndex+1,
                category:[],
                searchString:searchStringy
               })
        })
    }

    clearScreen(){
        this.setState({
            movieArray:[],
            loading:false,
            pageIndex:1,
            searchString:""
           })
        }
    
    loadMovies(page,limit){
        MovieService.getMovies(page,limit).then(result=>{
             this.setState({
                 movieArray:this.state.movieArray.concat(result),
                 loading:false,
                 pageIndex:this.state.pageIndex+1,
                 category:[]
                })
            });
        }

    loadMoviesFiltered(page,limit,categoryArray){
            MovieService.getFilteredMovies(page,limit,categoryArray).then(result=>{
                this.setState({
                    movieArray:this.state.movieArray.concat(result),
                    loading:false,
                    pageIndex:this.state.pageIndex+1,
                    category:categoryArray
                    })
                });
            }   

    applyFilters(categoriesArray){
        if (categoriesArray.length!=0){
            this.clearScreen();
            this.loadMoviesFiltered(1,15,categoriesArray);
        }
        else{
            this.clearScreen();
            this.loadMovies(1,15);
        }  
    }

    searchEntered(searchString){
        if (searchString==""){
            this.clearScreen();
            this.loadMovies(1,15);
        }
        else{
            this.clearScreen();
            this.dislayByName(searchString,1,15);
        }
    }

    componentDidMount() {
        this.loadMovies(this.state.pageIndex,15);
        document.addEventListener('scroll', this.trackScrolling);
    }

    trackScrolling(){
        const current=document.documentElement.scrollTop;
        const client=document.documentElement.clientHeight;
        const offset=document.documentElement.offsetHeight;
        const loadMovies=(this.state.category.length==0&&this.state.searchString.length==0);
        const loadMoviesBySearch=(this.state.searchString.length>0&&this.state.category.length==0);
        const loadMoviesByFilter=(this.state.searchString.length==0&&this.state.category.length>0);
        if(current+client==offset)
            if (loadMovies){
                this.loadMovies(this.state.pageIndex,15);
            }
            else 
            if (loadMoviesBySearch){
                this.dislayByName(this.state.searchString,this.state.pageIndex,15);
            }
            else if(loadMoviesByFilter){
                this.loadMoviesFiltered(this.state.pageIndex,15,this.state.category);
            }
    }

    render(){
        if (this.state.loading) {
            return <h1>LOADING</h1>;
        }
        return(
        <div className="main-view rows">
            <HeaderComponent searchEntered={this.searchEntered} />
            <div className="side-row">
                <div className="side-component-container">
                    <SideComponent applyFilters={this.applyFilters} />
                </div>
            </div>
            <div className="movie-component-container">
            {this.state.movieArray.map((movie, i)=>(
                <MovieComponent key={i} movie={movie} />
            ))}
            </div>
        </div>
        );
    }
}
