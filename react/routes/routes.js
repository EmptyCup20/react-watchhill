
import React from 'react';
import {render} from 'react-dom';
import {Router,Route,IndexRoute} from 'react-router'

import App from '../components/App';
import Home from '../components/Home';
import Blog from '../components/Blog';
import About from '../components/About';


module.exports = (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
    </Route>
);
























































