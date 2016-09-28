
import { USER_REQUEST,USER_RECEIVE } from '../constants/actionType';
import ajax from '../ajax';



/**
 * 获取个人文章列表
 * @param id -> 用户id
 * @returns {Function}
 */
export function user_getList(id) {
    return (dispatch,getState) => {
        if(user_authen(getState())) {
            return dispatch(user_ajax(id));             //发起一个http请求
        } else {
            return Promise.resolve();                   //告诉thunk无需等待,从而跳过dispatch,进入reducers?
        }
    };
}

/**
 * 判断是否正在获取
 * @param state
 */

function user_authen(state) {
    return !state.user.getting;
}


/**
 * 发起获取文章列表的ajax
 * @param id
 */
function user_ajax(id) {
    return dispatch => {
        dispatch(user_request());                               //挂起登录请求,防止重复请求
        return ajax().user(id)
            .then(data => dispatch(user_reveive(id,data)));   //接受到数据后重新更新state
    };
}


/**
 * 挂起获取文章列表请求
 * @returns {{type: string}}
 */
function user_request() {
    return {
        type: USER_REQUEST
    }
}


/**
 * 获取文章列表
 * @param id
 * @param data
 * @returns {{type: string}}
 */
function user_reveive(id,data) {

    return {
        type: USER_RECEIVE,
        data: data.data
    }
}


