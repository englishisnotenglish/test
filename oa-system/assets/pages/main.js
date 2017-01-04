import React from 'react';
import { render } from 'react-dom';
import {Router, hashHistory} from 'react-router';
import Main from './main.jsx';

const rootRoute = {
    path: '/',
    component: require('./components/home.jsx'),
    childRoutes: [require('./routers/operation-management/index.js')]
};

class Entry extends React.Component{
    constructor(){
        super();
    }

    render (){
        return <Router history={hashHistory} routes={rootRoute} />;
    }
}

render(<Main />, document.getElementById('main-holder'));
render(<Entry />, document.getElementById('section-main-container'));