//基础库
import { combineReducers } from 'redux';

//登录
import login from './login';
//注册
import register from './register';
//文章
import article from './article';



const reducer = combineReducers({
	login,
	register,
	article
});

export default reducer;


