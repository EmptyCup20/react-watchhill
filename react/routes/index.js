//基础库
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/*容器组件*/
import AppContainer from '../components/containers/AppContainer';           //首页
import IndexContainer from '../components/containers/IndexContainer';       //主页
    import HomeContainer from '../components/containers/HomeContainer';
    import AboutContainer from '../components/containers/AboutContainer';
    import WebContainer from '../components/containers/WebContainer';       //这个暂时没有
    import NodeContainer from '../components/containers/NodeContainer';     //这个暂时也没有
    import AddArticleContainer from '../components/containers/AddArticleContainer'
    import ProfileContainer from '../components/containers/ProfileContainer';
        import InfoContainer from '../components/containers/InfoContainer';
        import CodeContainer from '../components/containers/CodeContainer';
        import AvatarContainer from '../components/containers/AvatarContainer';
        import PassContainer from '../components/containers/PassContainer';
    import EditArticleContainer from '../components/containers/EditArticleContainer';
    import ArticleContainer from '../components/containers/ArticleContainer';
    import UserContainer from '../components/containers/UserContainer';
import LoginContainer from '../components/containers/LoginContainer';       //登录页
import RegisterContainer from '../components/containers/RegisterContainer'; //注册页

/*action*/
import { login_init } from '../actions/login';
import { register_init } from '../actions/register';
import { modify_init } from '../actions/profile';
import { addTempArticle } from '../actions/addArticle';
import { article_init,article_getContent,article_getHomeList } from '../actions/article';
import { user_getList } from  '../actions/user';
import { about_getList } from  '../actions/about';


/*constant*/
import { init } from '../constants/httpType';


const routes = (store) => {

    //login - 初始化视图
    function loginViewStateInit() {
        store.dispatch(login_init());
    }

    //register
    function registerViewStateInit() {
        store.dispatch(register_init());
    }

    //profile
    function profileViewStateInit() {
        store.dispatch(modify_init());
    }


    //article - 获取文章内容
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


    //uder - 获取个人文章列表
    function getArticleList(nextState, replaceState) {
        const id = {
            userId:nextState.params.id
        };

        //let isListExist = false;
        //const state = store.getState();
        //const lists = state.user.articleList;

        //for(let list of lists) {
        //    if(list._id === nextState.params.id) {
        //        isListExist = true;
        //        break;
        //    }
        //}

        //if(!isListExist) {
            store.dispatch(user_getList(id));
        //}
    }


    //home - 获取主页文章列表
    function getHomeArticleList() {
        store.dispatch(article_init());
        const state = store.getState();
        const list = state.articles.list;
        store.dispatch(article_getHomeList({pageNo:1}));
    }

    //about - 关于页成员获取
    function getMemberList() {
        const state = store.getState();
        const lists = state.about.memberList;

        if(!lists.length) {     //如果是第一次获取成员列表
            store.dispatch(about_getList());
        }

    }



    return(
        <Route>
            <Route path="/" component={AppContainer} />
            <Route path="/index" component={IndexContainer}>
                <IndexRoute onEnter={getHomeArticleList} component={HomeContainer} />
                <Route path='/about' onEnter={getMemberList} component={AboutContainer}  />
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
                <Route path="/edit_article/:id" onEnter={getArticleContent} component={EditArticleContainer} />
            </Route>
            <Route path="/login" onEnter={loginViewStateInit} component={LoginContainer}/>
            <Route path="/register" onEnter={registerViewStateInit} component={RegisterContainer}/>
        </Route>
    )
};


export default routes;
