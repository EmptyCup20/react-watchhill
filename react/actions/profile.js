import { MODIFY_REQUEST,MODIFY_RECEIVE,MODIFY_PASS,MODIFY_EMAIL,MODIFY_BRIEF,MODIFY_TEL } from '../constants/actionType';
import ajax  from '../ajax';




/**
 * 发起修改请求
 * @param type -> 修改类型
 * @param data -> 修改数据
 */
export function modify_start(type,data) {
    return (dispatch,getState) => {
        if(modify_authen(getState())) {
            return dispatch(modify_ajax(type,data));        //发起一个登录http请求
        } else {
            return Promise.resolve();                       //告诉thunk无需等待,从而跳过dispatch,进入reducers?
        }
    };
}

/**
 * 判断是否正在修改
 * @param state
 * @returns {boolean}
 */
function modify_authen(state) {
    return !state.profile.modifying;
}


/**
 * 发起ajax请求
 * @param type
 * @param data
 */
function modify_ajax(type,data) {

    return dispatch => {
        dispatch(modify_request());                          //挂起注册请求,防止重复请求

        switch(type) {
            //修改密码
            case MODIFY_PASS:
                return ajax().modifyPass(data)
                    .then(data => dispatch(modify_process(type,data)));   //接受到数据后重新更新state

            //修改邮箱,简介,电话
            case MODIFY_EMAIL:
            case MODIFY_BRIEF:
            case MODIFY_TEL:
                return ajax().modifyInfo(data)
                    .then(data => dispatch(modify_process(type,data)));   //接受到数据后重新更新state

            default:
                return dispatch(modify_receive());
        }
    };
}

/**
 * 挂起修改请求
 */
function modify_request() {
    return {
        type: MODIFY_REQUEST
    };
}


/**
 * 接收处理
 * @param data
 */
function modify_process(type,data) {

    return dispatch => {
        //dispatch(login_request());                                  //挂起登录请求,防止重复请求
        //return ajax().login(user)
        //    .then(data => dispatch(login_reveive(data)));   //接受到数据后重新更新state

        switch(type) {
            //修改密码
            case MODIFY_PASS:
                return  modify_receive(data.status);

            //修改邮箱,简介,电话
            case MODIFY_EMAIL:
            case MODIFY_BRIEF:
            case MODIFY_TEL:
                return  modify_receive(data.status);

            default:
                break;
        }
    };
}




function modify_receive(status) {
    return {
        type: MODIFY_RECEIVE,
        status:status
    };
}