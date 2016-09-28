
import { LOGIN_REQUEST,LOGIN_RECEIVE,LOGOUT_RECEIVE,LOGIN_INIT,MODIFY_LOGIN } from '../constants/actionType';
import { init,user_no_exist,password_err,success } from '../constants/httpType';

/**
 * 登录状态设置
 * @param state
 * @param action
 * @returns {*}
 */
const login_status = (state,action) => {
	switch(action.status) {

		case user_no_exist:
			return {
				//logined:false,
				loginStatus:user_no_exist,
				logining:false
				//loginUser:{}
			};
 
		case password_err:
			return {
				//logined:false,
				loginStatus:password_err,
				logining:false
				//loginUser:{}
			};

		case success:
			return {
				logined:true,
				loginStatus:success,
				loginUser:action.user,		//数据库里传的是数组
				logining:false
			}; 

		default:
			return state;
	}
};






/**
 * Login State Tree Reducer
 * @param state
 * @param action
 * @returns {*}
 */

const login = (state = {
	logined:false,
	loginStatus:init,			//登录状态
	logining:false,				//有没有正在登录标志
	loginUser:{}
}, action) => {

	switch(action.type) {

		case LOGIN_INIT:		//初始化视图
			return {
				...state,
				logined:false,
				loginStatus:init,			//登录状态
				logining:false,				//有没有正在登录标志
				loginUser:{}
			};

		case LOGIN_REQUEST:		//发起登录请求
			return {
				...state,
				logining: true
			};


		case LOGIN_RECEIVE:		//接受登录结果,注册的时候也会调用
			return {
				...state,
				// loginStatus:action.status,
				// logining: false,
				// logined: true
				...(login_status(state,action))
			};


		case LOGOUT_RECEIVE:
			return {
				...state,
				logined:false,
				loginUser:{},
				loginStatus:init,
				logining:false
			};

		case MODIFY_LOGIN:		//个人信息修改页面发送的action
			return {
				...state,
				loginUser:{
					...state.loginUser,
					...action.user
				}
			};

		default:
			return state;
	}
};


export default login;

