import React, {Component} from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent.js';
import SideComponent from '../SideComponent/SideComponent.js'
import MovieComponent from '../MovieComponent/MovieComponent.js';
export default class MainComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="MainView rows">
            <HeaderComponent/>
            <div className="sideRow">
                <div className="SideComponentContainer">
                    <SideComponent/>
                </div>
           
            </div>
            <MovieComponent/>
            </div>
    
        );
    }
}
