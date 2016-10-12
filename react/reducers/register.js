
import { tel_error,email_error,init,register_error,user_error,pass_error,pass_twice_error,user_exist,success } from '../constants/httpType';
import { REGISTER_TEL_ERROR,REGISTER_EMAIL_ERROR,REGISTER_ERROR,REGISTER_USER_ERROR,REGISTER_PASS_ERROR,REGISTER_PASS_TWICE_ERROR,REGISTER_REQUEST,REGISTER_RECEIVE,REGISTER_INIT } from '../constants/actionType';


const register = (state = {
    registering:false,          //正在注册
    registerStatus:init         //注册状态
}, action) => {

    switch(action.type) {

        case REGISTER_INIT:		//初始化视图
            return {
                ...state,
                registerStatus:init
            };


        case REGISTER_ERROR:    //注册信息未填写完整
            return {
                ...state,
                registerStatus:register_error
            };


        case REGISTER_USER_ERROR:   //账号格式错误
            return {
                ...state,
                registerStatus:user_error
            };


        case REGISTER_PASS_ERROR:   //密码格式错误
            return {
                ...state,
                registerStatus:pass_error
            };


        case REGISTER_EMAIL_ERROR:  //邮箱格式错误
            return {
                ...state,
                registerStatus:email_error
            };


        case REGISTER_TEL_ERROR:
            return {
                ...state,
                registerStatus:tel_error
            };


        case REGISTER_PASS_TWICE_ERROR:
            return {
                ...state,
                registerStatus:pass_twice_error
            }

        case REGISTER_REQUEST:
            return {
                ...state,
                registering:true
            };


        case REGISTER_RECEIVE:
            return {
                ...state,
                registering:false,
                registerStatus:action.status
            };

        default:
            return state;
    }
};




export default register;