//基础库
import { combineReducers } from 'redux';

//登录
import login from './login';
//注册
import register from './register';
//文章
import articles from './articles';
//添加文章
import addArticle from './addArticle'


const reducer = combineReducers({
	login,
	register,
	articles,
	addArticle
});

export default reducer;
