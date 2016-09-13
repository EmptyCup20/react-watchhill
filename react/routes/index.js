
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//容器组件
import App from '../containers/App';
import Index from '../containers/Index';
import Home from '../containers/Home';
import Blog from '../containers/Blog';
import About from '../containers/About';
import Login from '../containers/Login';
import Register from '../containers/Register';



const routes = (state) => {
    return(
        //<Route path="/" component={App}>
        //    <IndexRoute component={Home}/>
        //    <Route path="/about" component={About}/>
        //    <Route path="/blog" component={Blog}/>
        //    <Route path="/login" component={Login}/>
        //    <Route path="/register" component={Register}/>
        //</Route>

        //这个Route标签是个坑,坑啊!
        <Route>
            <Route path="/" component={App} />
            <Route path="/index" component={Index}>
                <IndexRoute component={Home} />
                <Route path='/blog' component={Blog}  />
                <Route path='/about' component={About}  />
            </Route>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Route>

    )
};


export default routes;


//module.exports = (
//    <Route path="/" component={App}>
//        <IndexRoute component={Home}/>
//        <Route path="/about" component={About}/>
//        <Route path="/blog" component={Blog}/>
//        <Route path="/login" component={Login}/>
//        <Route path="/register" component={Register}/>
//    </Route>
//);

























































