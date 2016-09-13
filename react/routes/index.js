


//容器组件
//import App from '../containers/App';
//import Login from '../containers/Login';
//import Index from '../containers/Index.jsx';
//import Register from '../containers/Register';
//import Home from '../containers/Home';
//import Blog from '../containers/Blog';
//import About from '../containers/About';
//
//
//const routes = (state) => {
//    return (
//        <Route path="/" component={App}>
//            <Route path="/index" component={Index} />
//            <Route path="/login" component={Login}/>
//            <Route path="/register" component={Register}/>
//        </Route>
//    )
//};
//
//export default routes;


import React from 'react';
import { Route, IndexRoute } from 'react-router';

//容器组件
import App from '../containers/App';
import Home from '../containers/Home';

import Blog from '../containers/Blog';
import About from '../containers/About';

import Login from '../containers/Login';
import Register from '../containers/Register';


module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>

        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
    </Route>
);

























































