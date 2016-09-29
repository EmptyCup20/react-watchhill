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

/*action*/
import { login_init } from '../actions/login';
import { register_init } from '../actions/register';
import { modify_init } from '../actions/profile';
import { addTempArticle } from '../actions/addArticle';
import { article_getContent,article_getHomeList } from '../actions/article';
import { user_getList } from  '../actions/user';


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


    //获取文章内容
    function getArticleContent(nextState, replaceState) {
        const id = {
            articleId:nextState.params.id
        };

        let isContentExist = false;

        const state = store.getState();
        const lists = state.articles.contentList;

        for(let article of lists) {
            if(article._id === nextState.params.id) {
                isContentExist = true;
                break;
            }
        }

        if(!isContentExist) {   //如果文章不存在,则ajax获取文章
            store.dispatch(article_getContent(id));
        }
    }


    //获取个人文章列表
    function getArticleList(nextState, replaceState) {
        const id = {
            userId:nextState.params.id
        };

        let isListExist = false;
        const state = store.getState();
        const lists = state.user.articleList;

        for(let list of lists) {
            if(list._id === nextState.params.id) {
                isListExist = true;
                break;
            }
        }

        if(!isListExist) {
            store.dispatch(user_getList(id));
        }
    }


    //获取主页文章列表
    function getHomeArticleList() {
        let isListExist = false;
        const state = store.getState();
        const list = state.articles.list;

        if(!list.length) {
            store.dispatch(article_getHomeList());
        }
    }




    return(
        <Route>
            <Route path="/" component={AppContainer} />
            <Route path="/index" component={IndexContainer}>
                <IndexRoute onEnter={getHomeArticleList} component={HomeContainer} />
                <Route path='/web' component={WebContainer}  />
                <Route path='/node' component={NodeContainer}  />
                <Route path='/about' component={AboutContainer}  />
                <Route path='/add_article' component={AddArticleContainer}  />
                <Route path='/profile' component={ProfileContainer}>
                    <IndexRoute onEnter={profileViewStateInit} component={InfoContainer}/>
                    <Route path="info"  onEnter={profileViewStateInit} component={InfoContainer} />
                    <Route path="pass" onEnter={profileViewStateInit} component={PassContainer} />
                    <Route path="avatar" component={AvatarContainer} />
                    <Route path="code" component={CodeContainer} />
                </Route>
                <Route path="/article/:id" onEnter={getArticleContent} component={ArticleContainer} />
                <Route path="/user/:id" onEnter={getArticleList} component={UserContainer} />
            </Route>
            <Route path="/login" onEnter={loginViewStateInit} component={LoginContainer}/>
            <Route path="/register" onEnter={registerViewStateInit} component={RegisterContainer}/>
        </Route>
    )
};


export default routes;
