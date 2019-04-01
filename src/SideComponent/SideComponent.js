import React from 'react'

const SideComponent = (props) => {

    return <div className="SideComponent" >
    <h2>CATEGORIES</h2>
        <ul className="sidemenu row">
            <li><a><input type="radio" value="1"/>Category 1</a></li>
            <li><a><input type="radio" value="2"/>Category 2</a></li>
            <li><a><input type="radio" value="3"/>Category 3</a></li>
            <li><a><input type="radio" value="4"/>Category 4</a></li>
            <li><a><input type="radio" value="5"/>Category 5</a></li>
            <li><a><input type="radio" value="5"/>Category 6</a></li>
            <li><a><input type="radio" value="5"/>Category 7</a></li>
            <li><a><input type="radio" value="5"/>Category 8</a></li>
        </ul>   
    </div>
}

export default SideComponent