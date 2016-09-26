//基础库
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/*容器组件*/
import AppContainer from '../components/containers/AppContainer';           //首页

import IndexContainer from '../components/containers/IndexContainer';       //主页
    import HomeContainer from '../components/containers/HomeContainer';
    import AboutContainer from '../components/containers/AboutContainer';
    import WebContainer from '../components/containers/WebContainer';
    import NodeContainer from '../components/containers/NodeContainer';
    import AddArticleContainer from '../components/containers/AddArticleContainer'
    import ProfileContainer from '../components/containers/ProfileContainer';
        import InfoContainer from '../components/containers/InfoContainer';
        import CodeContainer from '../components/containers/CodeContainer';
        import AvatarContainer from '../components/containers/AvatarContainer';
        import PassContainer from '../components/containers/PassContainer';

import LoginContainer from '../components/containers/LoginContainer';       //登录页
import RegisterContainer from '../components/containers/RegisterContainer'; //注册页

/*初始化action*/
import { login_init } from '../actions/login';
import { register_init } from '../actions/register';
import { modify_init } from '../actions/profile';
import { addTempArticle } from '../actions/addArticle'

const routes = (store) => {

    //初始化视图
    function loginViewStateInit() {
        store.dispatch(login_init());
    }

    function registerViewStateInit() {
        store.dispatch(register_init());
    }


    function profileViewStateInit() {
        store.dispatch(modify_init());
    }



    return(
        <Route>
            <Route path="/" component={AppContainer} />
            <Route path="/index" component={IndexContainer}>
                <IndexRoute component={HomeContainer} />
                <Route path='/web' component={WebContainer}  />
                <Route path='/node' component={NodeContainer}  />
                <Route path='/about' component={AboutContainer}  />
                <Route path='/add_article'  component={AddArticleContainer}  />
                <Route path='/profile' component={ProfileContainer}>
                    <IndexRoute  component={InfoContainer}/>
                    <Route path="info"   component={InfoContainer} />
                    <Route path="pass"  component={PassContainer} />
                    <Route path="avatar" component={AvatarContainer} />
                    <Route path="code" component={CodeContainer} />
                </Route>
            </Route>
            <Route path="/login" onEnter={loginViewStateInit} component={LoginContainer}/>
            <Route path="/register" onEnter={registerViewStateInit} component={RegisterContainer}/>
        </Route>
    )
};


export default routes;
