import React from 'react';
import {MemoryRouter as Router, Route} from 'react-router'
import {Old, Main, Button, Table, TodoList} from '../containers'
const root = <Router>
            <div style={{height: '100%'}}>
                <Route path='/' component={TodoList} />
                <Route path='/old' component={Main} />
                <Route path='/button' component={Old} />
            </div>
        </Router>;

export default root;















