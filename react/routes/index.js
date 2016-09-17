//基础库
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//容器组件
import App from '../containers/App';
import IndexContainer from '../containers/IndexContainer';
import Home from '../containers/Home';
import Blog from '../containers/Blog';
import About from '../containers/About';
import LoginContainer from '../containers/LoginContainer';
import Register from '../containers/Register';



const routes = (state) => {
    return(
        <Route>
            <Route path="/" component={App} />
            <Route path="/index" component={IndexContainer}>
                <IndexRoute component={Home} />
                <Route path='/blog' component={Blog}  />
                <Route path='/about' component={About}  />
            </Route>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/register" component={Register}/>
        </Route>
    )
};


export default routes;
























































