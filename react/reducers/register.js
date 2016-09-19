
import { init,user_no_exist,password_err,user_exist,success } from '../constants/httpType';
import { REGISTER_REQUEST,REGISTER_RECEIVE } from '../constants/actionType';


const register = (state = {
    registering:false,          //正在注册
    registerStatus:init            //注册状态
}, action) => {

    switch(action.type) {
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