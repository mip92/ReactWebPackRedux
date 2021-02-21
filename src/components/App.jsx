import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../reducers/reposReducer";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/Card";
import Error from "./main/Error";

const App = () => {

    return (
        <BrowserRouter>
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/card/:username/:reponame' component={Card}/>
                    <Route path='/error' component={Error}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;