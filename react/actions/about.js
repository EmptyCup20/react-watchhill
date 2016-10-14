
import { ABOUT_REQUEST,ABOUT_RECEIVE } from '../constants/actionType';
import ajax from '../ajax';



/**
 * 获取成员列表
 * @returns {Function}
 */
export function about_getList() {
    return (dispatch,getState) => {
        if(about_authen(getState())) {
            return dispatch(about_ajax());             //发起一个http请求
        } else {
            return Promise.resolve();                   //告诉thunk无需等待,从而跳过dispatch,进入reducers?
        }
    };
}

/**
 * 判断是否正在获取
 * @param state
 */

function about_authen(state) {
    return !state.about.getting;
}


/**
 * 发起获取成员列表的ajax
 * @param id
 */
function about_ajax() {
    return dispatch => {
        dispatch(about_request());                               //挂起登录请求,防止重复请求
        return ajax().about()
            .then(data => dispatch(about_receive(data)));   //接受到数据后重新更新state
    };
}


/**
 * 挂起获取成员列表请求
 * @returns {{type: string}}
 */
function about_request() {
    return {
        type: ABOUT_REQUEST
    }
}


/**
 * 获取成员列表
 * @param data
 * @returns {{type: string}}
 */
function about_receive(data) {
    return {
        type: ABOUT_RECEIVE,
        data: data.data
    }
}

