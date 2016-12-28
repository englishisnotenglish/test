import React from 'react';
import { render } from 'react-dom';
import {Router, hashHistory, History} from 'react-router';
const rootRoute = {
    path: '/',
    component: require('./components/home.jsx'),
    childRoutes: [require('./routers/operation-management/index.jsx')]
};

render((
    <Router
        history={hashHistory}
        routes={rootRoute}
    />
), document.getElementById('main-holder'));