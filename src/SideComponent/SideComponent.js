import React, { Component } from 'react'
import CategoryService from '../Services/CategoryService.js'

export default class SideComponent extends Component {
    constructor() {
        super()
        this.state = {
            categoryArray: [],
            loading: true,
            selectorArray: []
        }
    }

    selector(index) {
        let setCheck = this.state.selectorArray;
        let name=this.state.categoryArray[index].name;
            if (setCheck.indexOf(name)==-1){
                setCheck.push(name);
            } else {
                setCheck.splice(setCheck.indexOf(name),1);
            }
        this.setState({
            selectorArray: setCheck
            })
        this.props.applyFilters(setCheck);
    }

    loadCategories() {
        CategoryService.getCategories().then(result => {
            console.log(result);
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
        let boxes=document.getElementsByClassName("categorySelect");
        let i;
        for(i=0; i<boxes.length;i++)
            boxes[i].checked="";
        this.props.applyFilters([]);    
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
                        <li key={i}><a><input className="categorySelect" type="checkbox" id="test" name={category.name} onClick={() => this.selector(i)} />{category.name}</a></li>
                        ))}
                </ul>
                <button type="button" onClick={()=>this.uncheck()}>Reset Filters</button>
            </div>
            );
    }
}

