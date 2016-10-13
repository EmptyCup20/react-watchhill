import { MODIFY_VERIFY_ERROR,MODIFY_PASS_ERROR,MODIFY_ERROR,MODIFY_BRIEF_ERROR,MODIFY_EMAIL_ERROR,MODIFY_TEL_ERROR,MODIFY_REQUEST,MODIFY_RECEIVE,MODIFY_INIT } from '../constants/actionType';
import { pass_twice_error,pass_error,init,modify_err,brief_err,email_error,tel_error } from '../constants/httpType';

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

        case MODIFY_ERROR:          //修改内容为空
            return {
                ...state,
                modifyStatus:modify_err
            };


        case MODIFY_BRIEF_ERROR:      //简介过长
            return {
                ...state,
                modifyStatus:brief_err
            };

        case MODIFY_EMAIL_ERROR:    //修改邮箱格式错误
            return {
                ...state,
                modifyStatus:email_error
            };


        case MODIFY_TEL_ERROR:      //修改的电话格式错误
            return {
                ...state,
                modifyStatus:tel_error
            };

        case MODIFY_PASS_ERROR:     //修改的密码格式错误
            return {
                ...state,
                modifyStatus:pass_error
            };


        case MODIFY_VERIFY_ERROR:
            return {
                ...state,
                modifyStatus:pass_twice_error
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