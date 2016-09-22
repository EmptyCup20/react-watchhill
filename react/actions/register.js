import { REGISTER_REQUEST,REGISTER_RECEIVE,REGISTER_INIT } from '../constants/actionType';
import ajax  from '../ajax';
import { user_exist,success } from '../constants/httpType';
import  { login_reveive } from './login';


/**
 * 视图初始化
 */
export function register_init() {
    return {
        type: REGISTER_INIT
    };
}


/**
 * 准备开始注册
 * @param user -> 注册用户
 * @returns {Function}
 */
export function register_start(user) {
    return (dispatch,getState) => {
        if(register_authen(getState())) {
            return dispatch(register_ajax(user));           //发起一个登录http请求
        } else {
            return Promise.resolve();                       //告诉thunk无需等待,从而跳过dispatch,进入reducers?
        }
    };
}


/**
 * 判断是否正在注册
 * @param state
 * @returns {boolean}
 */

function register_authen(state) {
    return !state.register.registering;
}


/**
 * 发起注册的ajax请求
 * @param user
 */
function register_ajax(user) {
    return dispatch => {
        dispatch(register_request());                                   //挂起注册请求,防止重复请求
        return ajax().register(user)
            .then(data => dispatch(register_process(data)));   //接受到数据后重新更新state
    };
}

/**
 * 挂起注册请求
 * @returns {{type: string}}
 */

function register_request() {
    return {
        type: REGISTER_REQUEST
    }
}


/**
 * 接收状态处理
 * @param user
 * @param data
 * @returns {{type: *, user: {username: *}, status: *}}
 */
function register_process(data) {

    if(status === user_exist) {     //注册失败
        return register_recieve(data.status);
    } else {                        //注册成功
        return dispatch => {
            dispatch(login_reveive(data));       //登录state tree
            return dispatch(register_recieve(data.status));
        }
    }
}


/**
 * 发起receive请求
 * @param status
 * @returns {{type: string, status: *}}
 */
function register_recieve(status) {
    return {
        type: REGISTER_RECEIVE,
        status: status
    };
}

