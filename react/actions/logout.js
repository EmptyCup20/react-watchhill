import { LOGOUT_RECEIVE } from '../constants/actionType';
import { success } from '../constants/httpType';
import ajax from '../ajax';

/**
 * 发起注销请求
 * @returns {Function}
 */

export function logout() {
    return dispatch => {
        return ajax().logout()
            .then(data => {
                if(data.status === success) {
                    return dispatch(logout_receive());
                }
            });   //接受到数据后重新更新state
    };
}


/**
 * 注销接收
 */
function logout_receive() {
    return {
        type: LOGOUT_RECEIVE
    };
}



