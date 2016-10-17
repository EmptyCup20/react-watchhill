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



    match({ routes:routes(), location: req.url }, (err, redirect, props) => {


        redirect = false;   //默认不能进行重定向

        if(/^\/profile(?:\/(pass|info|avatar|code)|)\/?$/.test(req.url) ||  /^\/add_article\/?$/.test(req.url)) {
            if(!req.session.loginUser) {     //如果用户未登录,以上页面不允许进入
                redirect = true;
            }
        }


        if (err) {
            res.status(500).send(err.message)
        } else if (redirect) {
            res.redirect('/index');                             //用户在没有权限的情况下一律跳转到index页面
        } else if (props) {

            getLoginStatus();                                   //state tree 获取登录状态
            let store = configureStore(req.session.stateTree);  //需要注意与客户端的store统一

            const appHtml = renderToString(
                <Provider store={store}>
                    <RouterContext {...props}/>
                </Provider>
            );

            res.render('index',{
                html:appHtml,
                serverState:JSON.stringify(store.getState())
            });


        } else {
            //路由匹配不到,这里这个提示页面暂时不做
            res.status(404).send('Not Found')
        }
    })
});


module.exports = router;
