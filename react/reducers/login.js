
import { LOGIN_REQUEST,LOGIN_RECEIVE } from '../constants/actionType';
import { login_init,user_no_exist,password_err,success } from '../constants/actionType';

const login_status = (state,action) => {
	//console.log('action:',action);
	switch(action.status) {

		case 'user_no_exist':
		//console.log('1');
			return {
				//logined:false,
				loginStatus:'user_no_exist',
				logining:false
				//loginUser:{}	
			};
 
		case 'password_err':
		//console.log('2');
			return {
				//logined:false,
				loginStatus:'password_err',
				logining:false
				//loginUser:{}
			};

		case 'success':
		//console.log('3');
			return {
				logined:true,
				loginStatus:'success',
				loginUser:action.user,
				logining:false
			}; 

		default:
			return state;
	}
};




const login = (state = {
	logined:false,
	loginStatus:'login_init',	//登录状态
	logining:false,			//有没有正在登录标志
	loginUser:{}
}, action) => {

	switch(action.type) {

		case LOGIN_REQUEST:		//发起登录请求
			return {
				...state,
				logining: true
			};


		case LOGIN_RECEIVE:		//接受登录结果
			let obj = {
				...state,
				// loginStatus:action.status,
				// logining: false,
				// logined: true
				...(login_status(state,action))
			};
			//console.log('reducers,login:',obj);

			return obj;


		default:
			return state;
	}
};


export default login;

