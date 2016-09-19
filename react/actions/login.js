import { LOGIN_REQUEST,LOGIN_RECEIVE } from '../constants/actionType';
import ajax from '../ajax';


/**
 * 准备开始登录
 * @param user -> 登录用户
 * @returns {Function}
 */
export function login_start(user) {
    return (dispatch,getState) => {
        if(login_authen(getState())) {
            return dispatch(login_ajax(user));          //发起一个登录http请求
        } else {
            return Promise.resolve();                   //告诉thunk无需等待,从而跳过dispatch,进入reducers?
        }
    };
}

/**
 * 判断是否已经登录,以及是否正在登录
 * @param state
 * @returns {boolean} true -> 可以进行登录操作,这一步可以控制HTTP请求数,防止恶意的重复请求
 */
function login_authen(state) {
    return !state.login.logined && !state.login.logining;
}


/**
 * 发起登录的ajax请求
 * @param user
 * @param pass
 * @returns {Function}
 */
function login_ajax(user) {
    return dispatch => {
        dispatch(login_request());                                  //挂起登录请求,防止重复请求
        return ajax().login(user)
            .then(data => dispatch(login_reveive(user,data.status)));   //接受到数据后重新更新state
    };
}

/**
 * 挂起请求登录
 * @param user
 * @returns {{type: string, user: *}}
 */
function login_request() {
    return {
        type: LOGIN_REQUEST
    };
}

/**
 * ajax数据接收处理
 * @param user
 * @param status
 * @returns {{type: string, user: {username: *}, status: *}}
 */

export function login_reveive(user,status) {
    return {
        type: LOGIN_RECEIVE,
        user: {username:user.username},
        status: status
    };
}






///**
// * 这里暂时放一下ajax,最后可以独立出来
// */
//
//function ajax(){
//    function req(method,url,data) {
//        var defered = $.Deferred();
//        var request = {
//            type: method,
//            url: url,
//            //dataType: "json"?
//            data: data
//        };
//
//        $.ajax(request)
//            .done(function(data){
//                defered.resolve(data);
//            })
//            .fail(function(){
//                defered.reject();
//            });
//
//        return defered.promise();
//    }
//
//    return {
//        login: function(data){
//            return req('POST','/user/login',data);
//        }
//    };
//}