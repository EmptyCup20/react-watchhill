import express from 'express';
const router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match , browserHistory} from 'react-router';
//import { Provider } from 'react-redux';
//import { combineReducers } from 'redux'
import routes from '../../react/routes/routes';
//import configureStore from '../views/react/store';
//import { LOGIN_RECEIVE } from '../views/react/actions'
//import reducers from '../views/react/reducers'


// send all requests to index.html so browserHistory works
router.get('/*', (req, res,next) => {
    match({ routes, location: req.url }, (err, redirect, props) => {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)
        } else if (props) {
            // hey we made it!
            const appHtml = renderToString(<RouterContext {...props}/>);
            res.render('index',{
               html:appHtml
            });
        } else {
            res.status(404).send('Not Found')
        }
    })
});



module.exports = router;


