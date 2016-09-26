//express
import express from 'express';
const router = express.Router();

//基础库
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match , browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

//react路由
import routes from '../../react/routes/index-server';

//redux store
import configureStore from '../../react/store';

//mongo article
import article from '../proxy/article';




router.get('/*', (req, res,next) => {

    //state tree
    req.session.stateTree = {};

    /**
     * 获取登录状态
     */
    function getLoginStatus() {
        if(req.session.loginUser) {
            req.session.stateTree.login = {
                loginUser:req.session.loginUser,
                logined:true
            }
        }
    }

    /**
     * 获取文章列表
     */
    function getArticleList() {
        return article.getArticleList({
            pageSize:9,                     //首页只需要获取9篇文章
            pageNo:1
        });
    }






    const store = configureStore();       //这里需要传入需要的state tree

    match({ routes:routes(store), location: req.url }, (err, redirect, props) => {

        if (err) {
            res.status(500).send(err.message)
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)
        } else if (props) {


            if(req.url.indexOf('/article/') !== -1) {
                console.log('文章请求:', req.url);
                console.log(req.url.split('/')[1]);
                console.log(req.url.split('/')[2]);
            }



            Promise.all([
                //getLoginStatus()
                getArticleList()
            ])
            .then( (datas) => {


                /*1. state tree 获取登录状态*/
                getLoginStatus();


                /*2. state tree 获取文章列表*/
                if(datas && datas[0] && datas[0].rows) {
                    req.session.stateTree.articles = {
                        list:[]
                    };

                    datas[0].rows.forEach(function(item){
                        req.session.stateTree.articles.list.push(item._doc);
                    })
                }


                let store = configureStore(req.session.stateTree);
                console.log('node finally store:', store.getState());  //需要注意与客户端的store统一


                const appHtml = renderToString(
                    <Provider store={store}>
                        <RouterContext {...props}/>
                    </Provider>
                );
                res.render('index',{
                    html:appHtml,
                    serverState:JSON.stringify(store.getState())
                });
            })
            .catch();



        } else {
            //路由匹配不到,这里这个提示页面暂时不做
            res.status(404).send('Not Found')
        }
    })
});


module.exports = router;
