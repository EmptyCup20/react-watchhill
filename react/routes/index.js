//基础库
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//容器组件
import App from '../containers/App';
import IndexContainer from '../containers/IndexContainer';
//import Index from '../containers/Index';
import HomeContainer from '../containers/HomeContainer';
import Web from '../containers/Web';
import Node from '../containers/Node';
import About from '../containers/About';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import AddArticleContainer from '../containers/AddArticleContainer'



const routes = (state) => {

    //进入之前判断是否已经登录
    function isLogined() {
        //console.log('isLogined:',state.login.logined);
    }


    return(
        <Route>
            <Route path="/" component={App} />
            <Route path="/index" component={IndexContainer}>
                <IndexRoute component={HomeContainer} />
                <Route path='/web' component={Web}  />
                <Route path='/node' component={Node}  />
                <Route path='/about' component={About}  />
                <Route path='/add_article' component={AddArticleContainer}  />
            </Route>
            <Route path="/login" onEnter={isLogined} component={LoginContainer}/>
            <Route path="/register" component={RegisterContainer}/>
        </Route>
    )
};


export default routes;
