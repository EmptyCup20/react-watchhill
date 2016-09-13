import { createStore,applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';


const loggerMiddleware = createLogger();



//创建加入中间件的createStore函数
//它提供的是位于 action 被发起之后，到达 reducer 之前的扩展点
//具体详见rewatch example redux
// const configureStore = applyMiddleware(
// 	thunkMiddleware,
// 	loggerMiddleware
// )(createStore);

// export default configureStore;


const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(reducer,initialState);
	return store;
}






