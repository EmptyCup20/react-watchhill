//基础库
import { combineReducers } from 'redux';

//登录
import login from './login';
//注册
import register from './register';
//文章
import article from './articles';



const reducer = combineReducers({
	login,
	register,
	articles
});

export default reducer;


