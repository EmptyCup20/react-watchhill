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


    const store = configureStore();       //这里需要传入需要的state tree
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


