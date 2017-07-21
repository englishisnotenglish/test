import React from 'react';
import {MemoryRouter as Router, Route} from 'react-router'
import {Old, Main, Button} from '../containers'
const root = <Router>
            <div>
                <Route path='/' component={Button} />
                <Route path='/old' component={Main} />
                <Route path='/button' component={Old} />
            </div>
        </Router>;

export default root;















