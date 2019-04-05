import React, {Component} from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent.js';
import SideComponent from '../SideComponent/SideComponent.js'
import MovieComponent from '../MovieComponent/MovieComponent.js';
import MovieService from '../Services/MovieService.js';
import { throwStatement } from 'babel-types';
import SearchService from '../Services/SearchService.js';
export default class MainComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
        movieArray:[],
        loading:true,
        pageIndex:1,
        category:[]
        }
       
        this.trackScrolling=this.trackScrolling.bind(this);
        this.loadMovies=this.loadMovies.bind(this);
        this.loadMoviesFiltered=this.loadMoviesFiltered.bind(this);
        
    }

    dislayByName(searchString,page,limit){
        SearchService.getSearchSuggestion(searchString,page,limit).then(result=>{
            this.setState({
                movieArray:this.state.movieArray.concat(result),
                loading:false,
                pageIndex:this.state.pageIndex+1,
                category:[]
               })
        })

    }

    clearScreen(){
        this.setState({
            movieArray:[],
            loading:false,
            pageIndex:1
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

    componentDidMount() {
        this.loadMovies(this.state.pageIndex,15);
        document.addEventListener('scroll', this.trackScrolling);
    }

    trackScrolling(){
        let current=document.documentElement.scrollTop;
        let client=document.documentElement.clientHeight;
        let offset=document.documentElement.offsetHeight;
        if(current+client==offset)
            if (this.state.category.length==0)
                this.loadMovies(this.state.pageIndex,15);
            else
                this.loadMoviesFiltered(this.state.pageIndex,15,this.state.category);
    
    }

    render(){
        if (this.state.loading) {
            return <h1>LOADING</h1>;
        }
        return(
        <div className="MainView rows">
            <HeaderComponent />
            <div className="sideRow">
                <div className="SideComponentContainer">
                    <SideComponent applyFilters={this.applyFilters.bind(this)}/>
                </div>
            </div>
            <div className="MovieComponentContainer">
            {this.state.movieArray.map((movie, i)=>(
                <MovieComponent key={i} movie={movie} />
            ))}
            </div>
        </div>
        );
    }
}
