//基础库
import { createStore,applyMiddleware,compose } from 'redux';

//中间件
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

//reducers -> 改变state
import reducer from '../reducers';


const loggerMiddleware = createLogger();


export default function configureStore(preloadedState) {
	const store = createStore(
		reducer,
		preloadedState,
		applyMiddleware(thunkMiddleware,loggerMiddleware)
	);

	return store
}


