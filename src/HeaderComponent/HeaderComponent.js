import React from 'react'

const HeaderComponent = (props) => {

    return <div className="HeaderComponent" >
        <ul className="topnav">
            <li><a className= "title" href="#home">Sergiu's AWESOME movieDB</a></li>
            <li><a href="#me">Menu 1</a></li>
            <li><a href="#me">Menu 2</a></li>
            <li><a href="#me">Menu 3</a></li>
        </ul>   
    </div>
}

export default HeaderComponent