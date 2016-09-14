
import { LOGIN_REQUEST,LOGIN_RECEIVE } from '../constants/actionType';
import { login_init,user_no_exist,password_err,success } from '../constants/httpType';


const login = (state = {
	logined:false,
	loginStatus:login_init,	//登录状态
	logining:false			//有没有正在登录标志
}, action) => {

	switch(action.type) {

		case LOGIN_REQUEST:		//发起登录请求
			return {
				...state,
				logining: true
			};


		case LOGIN_RECEIVE:		//接受登录结果
			return {
				...state,
				loginStatus:action.status,
				logining: false
			};


		default:
			return state;
	}
};


export default login;

