//基础库
import { combineReducers } from 'redux';

//登录
import login from './login';
//注册
import register from './register';



const reducer = combineReducers({
	login,
	register
});

export default reducer;


