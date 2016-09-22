import { MODIFY_REQUEST,MODIFY_RECEIVE } from '../constants/actionType';
import { init,password_err,success } from '../constants/httpType';

const profile = (state = {
    modifying:false,            //正在修改
    modifyStatus:init
}, action) => {

    switch(action.type) {

        case MODIFY_REQUEST:
            return {
                ...state,
                modifying: true
            };

        case MODIFY_RECEIVE:
            return {
                ...state,
                modifyStatus:action.status
            };

        default:
            return state;
    }
};



export default profile;