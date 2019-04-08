import React from "react";
import ReactDOM from "react-dom";
import MainComponent from "./MainComponent/MainComponent.js"
import IndividualView from "./IndividualView/IndividualView.js"
import { BrowserRouter,Switch, Route, withRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={withRouter(MainComponent)} />
  
    </Switch>
    </BrowserRouter>

    ,document.getElementById("root"));