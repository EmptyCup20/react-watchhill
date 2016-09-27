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
    import ArticleContainer from '../components/containers/ArticleContainer';
    import UserContainer from '../components/containers/UserContainer';
import LoginContainer from '../components/containers/LoginContainer';       //登录页
import RegisterContainer from '../components/containers/RegisterContainer'; //注册页


const routes = (store) => {
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
                <Route path="/article/:id" component={ArticleContainer} />
                <Route path="/user/:id"  component={UserContainer} />
            </Route>
            <Route path="/login"  component={LoginContainer}/>
            <Route path="/register"  component={RegisterContainer}/>
        </Route>
    )
};


export default routes;
