import { ABOUT_REQUEST,ABOUT_RECEIVE } from '../constants/actionType';

const about = (state = {
    memberList:[],              //我们的成员列表
    getting:false               //有没有正在获取成员列表
}, action) => {

    switch(action.type) {
        case ABOUT_REQUEST:
            return {
                ...state,
                getting:true
            };

        case ABOUT_RECEIVE:
            return {
                ...state,
                getting:false,
                memberList:action.data
            };

        default:
            return state;
    }
};

export default about;