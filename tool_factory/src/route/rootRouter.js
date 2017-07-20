import React from 'react';
import {MemoryRouter as Router, Route} from 'react-router'
import {Old, Main} from '../containers'
const root = <Router>
            <div>
                <Route path='/' component={Main} />
                <Route path='/old' component={Old} />
                <Route path='/button' component={Old} />
            </div>
        </Router>;

export default root;















