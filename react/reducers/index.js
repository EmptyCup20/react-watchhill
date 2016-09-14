//基础库
import { combineReducers } from 'redux';

//登录
import login from './login';

const reducer = combineReducers({
	login
});

export default reducer;