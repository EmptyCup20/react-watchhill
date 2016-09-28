import { MODIFY_REQUEST,MODIFY_RECEIVE,MODIFY_PASS,MODIFY_EMAIL,MODIFY_BRIEF,MODIFY_TEL,MODIFY_INIT,MODIFY_LOGIN,MODIFY_AVATAR,MODIFY_CODE} from '../constants/actionType';
import ajax  from '../ajax';


/**
 * 状态初始化动作
 * @returns {{type: string}}
 */

export function modify_init() {
    return {
        type: MODIFY_INIT
    };
}




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
 * @param user -> 需要修改的用户信息
 */
function modify_ajax(type,user) {

    return dispatch => {
        dispatch(modify_request());                          //挂起注册请求,防止重复请求

        switch(type) {
            //修改密码
            case MODIFY_PASS:
                return ajax().modifyPass(user)
                    .then(data => dispatch(modify_process(type,data)));   //接受到数据后重新更新state

            //修改邮箱,简介,电话
            case MODIFY_EMAIL:
            case MODIFY_BRIEF:
            case MODIFY_AVATAR:
            case MODIFY_CODE:
            case MODIFY_TEL:
                return ajax().modifyInfo(user)
                    .then(data => dispatch(modify_process(type,data,user)));   //接受到数据后重新更新state
            default:
                return dispatch(modify_receive());
        }
    };
}

/**
 * 挂起修改请求动作
 */
function modify_request() {
    return {
        type: MODIFY_REQUEST
    };
}


/**
 * 接收数据处理
 * @param user -> 需要更改的用户信息
 * @param type
 * @param data -> 反馈信息
 * @returns {Function}
 */
function modify_process(type,data,user) {

    return dispatch => {

        switch(type) {
            //修改密码
            case MODIFY_PASS:
                dispatch(modify_receive(data.status));
                break;

            //修改邮箱,简介,电话
            case MODIFY_EMAIL:
            case MODIFY_BRIEF:
            case MODIFY_TEL:
                if(data.status === 'success') { //一般来说肯定会返回成功,但是数据库那边没有反馈err处理
                    dispatch(modify_login(user));
                }
                return dispatch(modify_receive(data.status));
                break;
            case MODIFY_AVATAR:
                if(data.status === 'success') { //一般来说肯定会返回成功,但是数据库那边没有反馈err处理
                    dispatch(modify_login(user));
                    alert('修改成功');
                }
                return dispatch(modify_receive(data.status));
                break;
            case MODIFY_CODE:
                if(data.status === 'success') { //一般来说肯定会返回成功,但是数据库那边没有反馈err处理
                    dispatch(modify_login(user));
                    alert('修改成功');
                }
                return dispatch(modify_receive(data.status));
                break;
            default:
                break;
        }
    };
}


/**
 * 发起登录用户信息更改动作
 * @param user
 */

function modify_login(user) {
    return {
        type:MODIFY_LOGIN,
        user:user
    }
}


/**
 * 发起接收处理动作
 * @param status
 * @returns {{type: string, status: *}}
 */
function modify_receive(status) {
    return {
        type: MODIFY_RECEIVE,
        status:status
    };
}
