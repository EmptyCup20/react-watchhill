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
import routes from '../../react/routes';

//redux store
import configureStore from '../../react/store';




router.get('/*', (req, res,next) => {

    //暂时这么设置,同步服务端和客户端
    if(req.session.user) {
        console.log('logined');
        var store = configureStore({
            login:{
                loginUser:{
                    username:req.session.user
                },
                logined:true
            }
        });       //这里需要传入需要的state tree

        //console.log(JSON.stringify(store.getState()));


    } else {
        console.log('unlogined');
        var store = configureStore();       //const有块级作用域
    }

    //const store = configureStore();       //这里需要传入需要的state tree
    console.log('node  store:', store.getState());                  //需要注意与客户端的store统一

    match({ routes:routes(), location: req.url }, (err, redirect, props) => {

        //测试用
        console.log('node,req.url:',req.url);

        if (err) {
            res.status(500).send(err.message)
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)
        } else if (props) {
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
            //路由匹配不到
            res.status(404).send('Not Found')
        }
    })
});


module.exports = router;


