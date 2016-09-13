import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';


const app = document.getElementById('app');

//<Router routes={routes} history={browserHistory}/>, ???  https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering


render(
  <Router history={browserHistory} >
      {routes()}
  </Router>,
  app
);





