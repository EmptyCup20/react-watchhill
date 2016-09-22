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
//个人中心-用户修改
import profile from './profile';

const reducer = combineReducers({
	login,
	register,
	articles,
	addArticle,
	profile
});

export default reducer;
