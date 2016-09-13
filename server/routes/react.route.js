import express from 'express';
const router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import { RouterContext, match , browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import routes from '../../react/routes';
//import configureStore from '../views/react/store';
//import { LOGIN_RECEIVE } from '../views/react/actions'
//import reducers from '../views/react/reducers'


// send all requests to index.html so browserHistory works

router.get('/*', (req, res,next) => {

    //match在渲染前根据location用来匹配react-router的routes路由
    //使用 RoutingContext 同步渲染 route 组件
    //注意！这里的 req.url 应该是从初始请求中获得的
    //完整的 URL 路径，包括查询字符串
    match({ routes:routes, location: req.url }, (err, redirect, props) => {


        //console.log('node,routes:',routes);
        console.log('node,req.url:',req.url);
        //console.log('node,props:', props);

        if (err) {
            res.status(500).send(err.message)
        } else if (redirect) {
            // we haven't talked about `onEnter` hooks on routes, but before a
            // route is entered, it can redirect. Here we handle on the server.
            res.redirect(redirect.pathname + redirect.search)
        } else if (props) {
            // hey we made it!
            // `RouterContext` is the what `Router` renders. `Router` keeps these
            // `props` in its state as it listens to `browserHistory`. But on the
            // server our app is stateless, so we need to use `match` to
            // get these props before rendering.

            // if we got props then we matched a route and can render
            const appHtml = renderToString(<RouterContext {...props}/>);
            res.render('index',{
               html:appHtml
            });
        } else {
            // no errors, no redirect, we just didn't match anything
            res.status(404).send('Not Found')
        }
    })
});


//至于加载数据，你可以用 renderProps 去构建任何你想要的形式——
//例如在 route 组件中添加一个静态的 load 方法，
//或如在 route 中添加数据加载的方法——由你决定


module.exports = router;


