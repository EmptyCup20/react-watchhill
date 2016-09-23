import { MODIFY_REQUEST,MODIFY_RECEIVE,MODIFY_INIT } from '../constants/actionType';
import { init } from '../constants/httpType';

const profile = (state = {
    modifying:false,            //正在修改
    modifyStatus:init
}, action) => {

    switch(action.type) {

        case MODIFY_INIT:
            return {
                ...state,
                modifyStatus:init
            };

        case MODIFY_REQUEST:
            return {
                ...state,
                modifying: true
            };

        case MODIFY_RECEIVE:
            return {
                ...state,
                modifying: false,
                modifyStatus:action.status
            };

        default:
            return state;
    }
};



export default profile;