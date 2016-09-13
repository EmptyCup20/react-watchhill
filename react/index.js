import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'; 
//import configureStore from './store';
import routes from './routes';
import configureStore from './store';

//window.__SERVER_STATE__ = <%- serverState %>;
//const serverState = window.__SERVER_STATE__;
const store = configureStore();		//传入服务端请求的state,使前后端Store tree统一
console.log('browser index.js store:', store.getState());


const app = document.getElementById('app');

//<Router routes={routes} history={browserHistory}/>, ???  https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering


render(
	<Provider store={store}>
		<Router history={browserHistory} >
      		{routes()}
  		</Router>
	</Provider>,
  app
);





