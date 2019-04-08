import React, { Component } from 'react'
import {CategoryService} from '../Services/CategoryService.js'

export default class SideComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryArray: [],
            loading: true,
            selectorArray: []
        }
    }

    selector(index) {
        const setCheck = this.state.selectorArray;
        const name=this.state.categoryArray[index].name;
        const {applyFilters}=this.props;
            if (setCheck.indexOf(name)==-1){
                setCheck.push(name);
            } else {
                setCheck.splice(setCheck.indexOf(name),1);
            }
        this.setState({
            selectorArray: setCheck
            })
        applyFilters(setCheck);
    }

    loadCategories() {
        CategoryService.getCategories().then(result => {
            this.setState({
                categoryArray: result,
                loading: false
            }) 
        })
    }

    componentDidMount() {
        this.loadCategories();
    }

    uncheck(){
        const boxes=document.getElementsByClassName("category-select");
        const {applyFilters}=this.props;
        let i;
        for(i=0; i<boxes.length;i++)
            boxes[i].checked="";
        applyFilters([]);    
    }

    render() {
        if (this.state.loading) {
            return <div className="SideComponent" >
                <h2>Loading</h2>
            </div>
        } else
            return (
            <div className="SideComponent" >
                <h2>CATEGORIES</h2>
                <ul className="sidemenu row">
                    {this.state.categoryArray.map((category, i) => (
                        <li key={i}><a><input className="category-select" type="checkbox" id="test" name={category.name} onClick={() => this.selector(i)} />{category.name}</a></li>
                        ))}
                </ul>
                <button type="button" onClick={()=>this.uncheck()}>Reset Filters</button>
            </div>
            );
    }
}

